import React from 'react';
import { Form } from 'react-bootstrap';

import styles from './Search.module.scss';

export type SearchProps = {
  text: string;
  results: number;
  onChangeSearch: (text: string) => void;
};

export const Search = ({ text, results, onChangeSearch }: SearchProps) => {
  const searchText = 'Search';

  return (
    <div className={styles.search}>
      <p className={styles.search__count}>{results}</p>
      <div className={styles.search__form}>
        <Form>
          <Form.Group className="mb-3" controlId="searchInput">
            <Form.Control
              type="text"
              className={styles.search__input}
              placeholder={searchText}
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSearch(e.currentTarget.value.trimStart())
              }
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
