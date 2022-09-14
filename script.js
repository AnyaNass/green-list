(() => {
	const refs = {
		menuBtn: document.querySelector(".menu-btn"),
		mobileMenu: document.querySelector(".menubox"),
		body: document.querySelector("#page"),
	};

	refs.menuBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.mobileMenu.classList.toggle("is-open");
		refs.menuBtn.classList.toggle("become-close")
		refs.body.classList.toggle("no-scroll");
	}
})();