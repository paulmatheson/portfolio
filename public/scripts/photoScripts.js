const GALLERY_BATCH_SIZE = 10;

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

async function init() {
  try {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const response = await fetch("/.netlify/functions/getPhotos");
    const photos = await response.json();

    if (!response.ok) {
      throw new Error(photos.error || `Photo request failed with ${response.status}`);
    }

    if (!Array.isArray(photos)) {
      throw new Error("Photo response was not an array");
    }

    const grid = document.querySelector(".grid");
    const loadMoreButton = document.getElementById("load-more-photos");

    if (!grid) {
      throw new Error("Photo grid element was not found");
    }

    if (!window.imagesLoaded || !window.Isotope || !window.lightGallery) {
      throw new Error("Gallery layout libraries did not load");
    }

    let visiblePhotoCount = Math.min(GALLERY_BATCH_SIZE, photos.length);
    let galleryLayout;
    let galleryLightbox;

    const getPhotoMarkup = (photo) => `
      <a class="grid-item" data-src="${photo.fullUrl}" data-sub-html="${escapeAttr(photo.title || "photo")}"${window.gsap && !reducedMotion ? ' style="opacity: 0; transform: translateY(18px);"' : ""}>
        <img src="${photo.thumbUrl}" loading="lazy" alt="${escapeAttr(photo.alt || "photo")}" />
      </a>
    `;

    const updateLoadMoreButton = () => {
      if (!loadMoreButton) return;

      const hasMorePhotos = visiblePhotoCount < photos.length;
      loadMoreButton.hidden = !hasMorePhotos;
      loadMoreButton.disabled = false;
    };

    const revealItems = (items) => {
      if (!window.gsap || reducedMotion) return;

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });
    };

    const appendNextPhotos = () => {
      if (!galleryLayout) return;

      const nextPhotos = photos.slice(visiblePhotoCount, visiblePhotoCount + GALLERY_BATCH_SIZE);
      if (!nextPhotos.length) return;

      if (loadMoreButton) {
        loadMoreButton.disabled = true;
      }

      grid.insertAdjacentHTML("beforeend", nextPhotos.map(getPhotoMarkup).join(""));
      visiblePhotoCount += nextPhotos.length;

      const newItems = Array.from(grid.querySelectorAll(".grid-item")).slice(-nextPhotos.length);

      imagesLoaded(newItems, () => {
        galleryLayout.appended(newItems);
        galleryLayout.layout();
        galleryLightbox?.refresh();
        revealItems(newItems);
        updateLoadMoreButton();
      });
    };

    grid.innerHTML = photos.slice(0, visiblePhotoCount).map(getPhotoMarkup).join("");

    imagesLoaded(grid, () => {
      galleryLayout = new Isotope(grid, {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
        masonry: { gutter: 10 },
      });

      galleryLightbox = lightGallery(grid, {
        controls: true,
        counter: false,
        download: false,
        thumbnail: true,
        plugins: [lgThumbnail],
      });

      if (window.gsap && !reducedMotion) {
        galleryLayout.once("layoutComplete", () => {
          revealItems(grid.querySelectorAll(".grid-item"));
        });
        galleryLayout.layout();
      }

      loadMoreButton?.addEventListener("click", appendNextPhotos);
      updateLoadMoreButton();
    });
  } catch (error) {
    console.error("Error loading Cloudinary photos:", error.message);
  }
}

function animatePageIntro() {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  gsap
    .timeline({ defaults: { ease: "power2.out" } })
    .from("main h1", { opacity: 0, y: 12, duration: 0.45 })
    .from("main section:first-child p", {
      opacity: 0,
      y: 10,
      duration: 0.35,
      stagger: 0.08,
    }, "-=0.2");
}

async function updateUnsplashStats() {
  try {
    const response = await fetch("/.netlify/functions/getUnsplashData");
    if (!response.ok) throw new Error(`Status: ${response.status}`);
    const { views, downloads } = await response.json();
    const unsplashStats = document.getElementById("unsplash-stats");
    unsplashStats.innerHTML = `
      <span class="photo-stat">${views.total.toLocaleString()}</span> views and 
      <span class="photo-stat">${downloads.total.toLocaleString()}</span> downloads on 
      <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉</a>.`;
  } catch (error) {
    console.error("Error updating Unsplash stats:", error.message);
  }
}

animatePageIntro();
init();
requestIdleCallback?.(() => updateUnsplashStats()) ??
  setTimeout(updateUnsplashStats, 0);
