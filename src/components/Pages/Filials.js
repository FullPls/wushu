import React, { useMemo, useState } from 'react';
import FilialPhotoCarousel from '../FilialPhotoCarousel';
import Filial2gisBlock from '../Filial2gisBlock';
import '../../css/to_filial.css';

const FILIALS = [
  {
    id: 1,
    address: 'г. Барнаул, ул. Ленинградская, 7б',
    photos: ['/img/filials/horizon.jpg', '/img/filials/horizon2.jpg', '/img/filials/horizon3.jpg'],
    mapUrl: 'https://2gis.ru/barnaul/firm/70000001022401449',
    mapWidget: {
      lat: 53.36043830302833,
      lon: 83.67350578308107,
      zoom: 15,
      orgId: '70000001022401449',
    },
    mapLinks: {
      bigMap:
        'https://2gis.ru/barnaul/firm/70000001022401449/center/83.67350578308107,53.36043830302833/zoom/15?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap',
      photos:
        'https://2gis.ru/barnaul/firm/70000001022401449/photos/70000001022401449/center/83.67350578308107,53.36043830302833/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos',
      route:
        'https://2gis.ru/barnaul/center/83.678885,53.356931/zoom/15/routeTab/rsType/bus/to/83.678885,53.356931╎Федерация Ушу Алтайского края?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route',
      routeTitle: 'Найти проезд до Федерация Ушу Алтайского края',
    },
  },
  {
    id: 2,
    address: 'г. Барнаул, ул. Геблера, 33б',
    photos: ['/img/filials/elans.jpg', '/img/filials/elans.jpg', '/img/filials/elans.jpg'],
    mapUrl: 'https://2gis.ru/barnaul/firm/563478234471418',
    mapWidget: {
      lat: 53.34336516649935,
      lon: 83.77255439758301,
      zoom: 16,
      orgId: '563478234471418',
    },
    mapLinks: {
      bigMap:
        'https://2gis.ru/barnaul/firm/563478234471418/center/83.77255439758301,53.34336516649935/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap',
      photos:
        'https://2gis.ru/barnaul/firm/563478234471418/photos/563478234471418/center/83.77255439758301,53.34336516649935/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos',
      route:
        'https://2gis.ru/barnaul/center/83.772552,53.343119/zoom/16/routeTab/rsType/bus/to/83.772552,53.343119╎Эланс, спортивный центр?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route',
      routeTitle: 'Найти проезд до Эланс, спортивный центр',
    },
  },
  {
    id: 3,
    address: 'г. Барнаул, пр. Красноармейский, 59а',
    photos: ['/img/filials/Tikara.jpg', '/img/filials/Tikara2.jpg', '/img/filials/Tikara.jpg'],
    mapUrl: 'https://2gis.ru/barnaul/firm/70000001064876798',
    mapWidget: {
      lat: 53.336472496187405,
      lon: 83.77077341079713,
      zoom: 16,
      orgId: '70000001064876798',
    },
    mapLinks: {
      bigMap:
        'https://2gis.ru/barnaul/firm/70000001064876798/center/83.77077341079713,53.336472496187405/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap',
      photos:
        'https://2gis.ru/barnaul/firm/70000001064876798/photos/70000001064876798/center/83.77077341079713,53.336472496187405/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos',
      route:
        'https://2gis.ru/barnaul/center/83.770775,53.336444/zoom/16/routeTab/rsType/bus/to/83.770775,53.336444╎Тикара Додзё, школа киокушин-каратэ?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route',
      routeTitle: 'Найти проезд до Тикара Додзё, школа киокушин-каратэ',
    },
  },
  {
    id: 4,
    address: 'г. Барнаул, ул. Мало-Табольская, 28',
    photos: ['/img/filials/Malotob.jpg', '/img/filials/Malotob.jpg', '/img/filials/Malotob.jpg'],
    mapUrl: 'https://2gis.ru/barnaul/firm/563478234412891',
    mapWidget: {
      lat: 53.33050136460048,
      lon: 83.79422664642335,
      zoom: 16,
      orgId: '563478234412891',
    },
    mapLinks: {
      bigMap:
        'https://2gis.ru/barnaul/firm/563478234412891/center/83.79422664642335,53.33050136460048/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap',
      photos:
        'https://2gis.ru/barnaul/firm/563478234412891/photos/563478234412891/center/83.79422664642335,53.33050136460048/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos',
      route:
        'https://2gis.ru/barnaul/center/83.794229,53.330027/zoom/16/routeTab/rsType/bus/to/83.794229,53.330027╎1000 мелочей, торговый центр?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route',
      routeTitle: 'Найти проезд до 1000 мелочей, торговый центр',
    },
  },
];

export function Filials() {
  const [activeId, setActiveId] = useState(1);
  const filial = useMemo(() => FILIALS.find((f) => f.id === activeId) || FILIALS[0], [activeId]);

  return (
    <div className="wrapper2 page-filials">
      <div className="container mt-4">
        <h2 className="mb-3">Филиалы</h2>

        <div className="filials-panel card shadow-sm overflow-hidden">
          <div className="row g-0">
            <div className="col-md-4 filials-panel__addresses bg-light">
              <nav className="filials-address-list d-flex flex-column gap-2 p-3" aria-label="Выбор филиала">
                {FILIALS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`btn w-100 text-start ${activeId === f.id ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setActiveId(f.id)}
                  >
                    {f.address}
                  </button>
                ))}
              </nav>
            </div>
            <div className="col-md-8">
              <div className="p-3">
                <FilialPhotoCarousel photos={filial.photos} address={filial.address} />
                <div className="mt-3">
                  <a href={filial.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Открыть на карте 2GIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Filial2gisBlock mapWidget={filial.mapWidget} mapLinks={filial.mapLinks} />
      </div>
    </div>
  );
}

export default Filials;
