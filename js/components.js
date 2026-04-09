class PlexiaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="nav" id="main-nav">
  <div class="container nav__inner">
    <a href="index.html" class="nav__logo" aria-label="PLEXIA – Inicio">
      <img src="img/logo-h.png" alt="PLEXIA" style="height:60px;width:auto;" />
    </a>
    <ul class="nav__links" role="list">
      <li><a href="index.html"       class="nav__link" data-i18n="nav_home">Inicio</a></li>
      <li><a href="nosotros.html"    class="nav__link" data-i18n="nav_about">Nosotros</a></li>
      <li><a href="servicios.html"   class="nav__link" data-i18n="nav_services">Servicios</a></li>
      <li><a href="sectores.html"    class="nav__link" data-i18n="nav_industries">Sectores</a></li>
      <li><a href="contacto.html"    class="nav__link" data-i18n="nav_contact">Contacto</a></li>
    </ul>
    <div class="nav__actions">
      <div class="lang-switcher" role="group" aria-label="Cambiar idioma">
        <button class="lang-btn active" data-lang="es" aria-label="Español">ES</button>
        <button class="lang-btn"        data-lang="en" aria-label="English">EN</button>
      </div>
      <a href="contacto.html" class="btn btn-primary" data-i18n="nav_cta">Hablemos</a>
    </div>
    <button class="nav__burger" id="nav-burger" aria-label="Menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Menú móvil">
  <a href="index.html"     class="mobile-menu__link" data-i18n="nav_home">Inicio</a>
  <a href="nosotros.html"  class="mobile-menu__link" data-i18n="nav_about">Nosotros</a>
  <a href="servicios.html" class="mobile-menu__link" data-i18n="nav_services">Servicios</a>
  <a href="sectores.html"  class="mobile-menu__link" data-i18n="nav_industries">Sectores</a>
  <a href="contacto.html"  class="mobile-menu__link" data-i18n="nav_contact">Contacto</a>
  <div class="mobile-menu__divider"></div>
  <div class="mobile-lang">
    <button class="lang-btn active" data-lang="es">ES</button>
    <button class="lang-btn"        data-lang="en">EN</button>
  </div>
</div>
    `;
  }
}

class PlexiaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <img src="img/logo-h.png" alt="PLEXIA" style="height:40px;width:auto;filter:brightness(0) invert(1);" />
        <p style="margin-top:.75rem;" data-i18n="footer_tag">Consultoría y Servicios IT</p>
        <p style="margin-top:.5rem;" data-i18n="footer_desc">Innovación tecnológica a la medida de cada cliente.</p>
      </div>
      <div>
        <p class="footer__heading" data-i18n="footer_menu">Menú</p>
        <ul class="footer__links">
          <li><a href="index.html"       data-i18n="nav_home">Inicio</a></li>
          <li><a href="nosotros.html"    data-i18n="nav_about">Nosotros</a></li>
          <li><a href="servicios.html"   data-i18n="nav_services">Servicios</a></li>
          <li><a href="sectores.html"    data-i18n="nav_industries">Sectores</a></li>
          <li><a href="contacto.html"    data-i18n="nav_contact">Contacto</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__heading" data-i18n="footer_contact_title">Contacto</p>
        <ul class="footer__links">
          <li><a href="mailto:contacto@plexia.com.ar" data-i18n="footer_email">contacto@plexia.com.ar</a></li>
          <li><span data-i18n="footer_location">Argentina</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span data-i18n="footer_copy">© 2025 Plexia. Todos los derechos reservados.</span>
      <span>www.plexia.com.ar</span>
    </div>
  </div>
</footer>
    `;
  }
}

customElements.define('plexia-header', PlexiaHeader);
customElements.define('plexia-footer', PlexiaFooter);
