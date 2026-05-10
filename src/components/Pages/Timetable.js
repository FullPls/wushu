import React, { useMemo, useState } from 'react';
import '../../css/to_timetable.css';

const TIMETABLES = [
  { id: 1, title: 'Ленинградская, 7б', img: '/img/timetable/T_horizon.jpg' },
  { id: 2, title: 'Геблера, 33б', img: '/img/timetable/T_elans.jpg' },
  { id: 3, title: 'Красноармейский, 59а', img: '/img/timetable/krasno.jpg' },
  { id: 4, title: 'Мало-Табольская, 28', img: '/img/timetable/malotab.jpg' }
];

export function Timetable() {
  const [activeId, setActiveId] = useState(1);
  const active = useMemo(() => TIMETABLES.find((x) => x.id === activeId) || TIMETABLES[0], [activeId]);

  return (
    <div className="wrapper2 page-timetable">
      <div className="container mt-4">
        <h2>Расписание</h2>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {TIMETABLES.map((x) => (
            <button key={x.id} className={`btn ${activeId === x.id ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setActiveId(x.id)}>
              {x.title}
            </button>
          ))}
        </div>
        <img src={active.img} alt={active.title} className="img-fluid rounded" />
      </div>
    </div>
  );
}

export default Timetable;
