import React, { useEffect, useRef } from 'react';

/**
 * Блок под филиалами: ссылки 2GIS + виджет карты (DGWidgetLoader), как в старом filials.php.
 */
export default function Filial2gisBlock({ mapWidget, mapLinks }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el || !mapWidget?.orgId) return undefined;

    const width = Math.max(280, Math.min(900, Math.round(el.getBoundingClientRect().width) || 900));
    const cfg = {
      container: el,
      width,
      height: 400,
      borderColor: '#a3a3a3',
      pos: { lat: mapWidget.lat, lon: mapWidget.lon, zoom: mapWidget.zoom },
      opt: { city: 'barnaul' },
      org: [{ id: mapWidget.orgId }],
    };

    el.innerHTML = '';

    const start = () => {
      if (typeof window.DGWidgetLoader !== 'function') return;
      // eslint-disable-next-line no-new, new-cap
      new window.DGWidgetLoader(cfg);
    };

    if (window.DGWidgetLoader) {
      start();
    } else {
      const s = document.createElement('script');
      s.src = 'https://widgets.2gis.com/js/DGWidgetLoader.js';
      s.async = true;
      s.onload = start;
      el.appendChild(s);
    }

    return () => {
      el.innerHTML = '';
    };
  }, [mapWidget.lat, mapWidget.lon, mapWidget.zoom, mapWidget.orgId]);

  if (!mapWidget?.orgId || !mapLinks) return null;

  return (
    <div className="onmap filials-onmap">
      <div className="filials-2gis-links mb-2">
        <a className="dg-widget-link d-inline-block" href={mapLinks.bigMap} target="_blank" rel="noopener noreferrer">
          Посмотреть на карте Барнаула
        </a>
        <div className="dg-widget-link">
          <a href={mapLinks.photos} target="_blank" rel="noopener noreferrer">
            Фотографии компании
          </a>
        </div>
        <div className="dg-widget-link">
          <a href={mapLinks.route} target="_blank" rel="noopener noreferrer">
            {mapLinks.routeTitle}
          </a>
        </div>
      </div>
      <div className="filials-2gis-mount" ref={mountRef} />
      <noscript>
        <p className="text-danger fw-bold">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</p>
      </noscript>
    </div>
  );
}
