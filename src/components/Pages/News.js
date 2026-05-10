import React, { useMemo, useState } from 'react';
import '../../css/to_news.css';

const NEWS = [
  { id: 1, title: 'Победа на Кубке России', text: 'Спортсмены федерации завоевали 3 золотых и 2 серебряных медали в Казани.', date: '12.04.2025' },
  { id: 2, title: 'Открыт набор в Бийске', text: 'Новый филиал федерации начинает набор детей с 7 лет.', date: '02.04.2025' },
  { id: 3, title: 'Мастер-класс от Семёна Уделова', text: 'Легендарный чемпион мира проведет открытый урок в Барнауле.', date: '28.03.2025' },
  { id: 4, title: 'Сборы перед чемпионатом', text: 'Провели интенсивные учебно-тренировочные сборы для сборной края.', date: '18.03.2025' },
  { id: 5, title: 'Новые группы по тайцзи', text: 'Открыты вечерние группы для взрослых и начинающих.', date: '10.03.2025' },
  { id: 6, title: 'Судейский семинар', text: 'Тренерский состав прошел аттестацию и судейскую практику.', date: '02.03.2025' }
];

const PAGE_SIZE = 3;

export function News() {
  const [page, setPage] = useState(1);
  const maxPage = Math.max(1, Math.ceil(NEWS.length / PAGE_SIZE));

  const items = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return NEWS.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <div className="wrapper2 page-news">
      <div className="container mt-4 news">
        <h2>Новости</h2>
        <div style={{ marginBottom: 16 }}>
          <button className="btn btn-outline-secondary" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Назад</button>
          <span style={{ margin: '0 12px' }}>Страница {page} / {maxPage}</span>
          <button className="btn btn-outline-secondary" onClick={() => setPage((p) => Math.min(maxPage, p + 1))} disabled={page === maxPage}>Вперед</button>
        </div>

        {items.map((news) => (
          <article key={news.id} style={{ marginBottom: 24 }}>
            <h4>{news.title}</h4>
            <p>{news.text}</p>
            <small>{news.date}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News;
