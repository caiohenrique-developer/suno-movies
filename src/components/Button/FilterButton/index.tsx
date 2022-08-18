import React, { useEffect, useState, useRef, SyntheticEvent } from 'react';
import MediaQuery from 'react-responsive';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import {
  Container,
  GenreActiveIndicator,
} from '@components/Button/FilterButton/styles';

import { fetchGenres, fetchMovieDiscoverWithGenre } from '@pages/api';
import { FetchMovieProps, FetchGenreProps } from '@pages/api/_types';

import { useFilteredButtonOption } from '@hooks/useFilteredButtonOption';

export const FilterButtons = (): JSX.Element => {
  const { setFilteredLayout, setFilteredMoviesByGenre } =
    useFilteredButtonOption();

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedLayout, setSelectedLayout] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState('Populares');
  const [genresApi, setGenresApi] = useState<FetchGenreProps[]>([]);
  const [listFilteredMoviesByGenre, setListFilteredMoviesByGenre] = useState<
    FetchMovieProps[]
  >([]);

  setFilteredLayout(selectedLayout);
  setFilteredMoviesByGenre(listFilteredMoviesByGenre);

  const genreFilterButtonRef = useRef<HTMLDivElement>(null);
  const layoutFilterButtonRef = useRef<HTMLDivElement>(null);

  const fetchData = async (genreID: number): Promise<void> => {
    if (genreID) {
      setListFilteredMoviesByGenre(await fetchMovieDiscoverWithGenre(genreID)); // Filtered by genre
    }

    setGenresApi(await fetchGenres()); // Get genre categories
  };

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    fetchData(8);

    const handleFilterButton = (evt: Event) => {
      if (layoutFilterButtonRef.current) {
        if (
          genreFilterButtonRef.current &&
          !genreFilterButtonRef.current.contains(evt.target as Node) &&
          layoutFilterButtonRef.current &&
          !layoutFilterButtonRef.current.contains(evt.target as Node)
        ) {
          setExpanded(false);
        }
      } else if (
        genreFilterButtonRef.current &&
        !genreFilterButtonRef.current.contains(evt.target as Node)
      ) {
        setExpanded(false);
      }
    };

    window.addEventListener('click', handleFilterButton);

    return () => {
      window.removeEventListener('click', handleFilterButton);
    };
  }, []);

  const genreValues = genresApi.map(({ id, genreName }) => ({
    inputID: id,
    labelHtmlFor: id,
    labelContent: genreName,
  }));

  const layoutValues = [
    { inputID: 'grid', labelHtmlFor: 'grid', labelContent: 'Em grid' },
    { inputID: 'lista', labelHtmlFor: 'lista', labelContent: 'Em lista' },
  ];

  return (
    <Container>
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={genreValues.length > 0 && 'hasChildElement'}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            ref={genreFilterButtonRef}
          >
            <Typography>{selectedGenre}</Typography>
          </AccordionSummary>

          {genreValues.length > 0 && (
            <ul>
              {genreValues.map(({ inputID, labelHtmlFor, labelContent }) => (
                <li
                  key={inputID}
                  className={`option-item ${
                    labelContent === selectedGenre ? 'selected' : ''
                  }`}
                >
                  <input
                    type='radio'
                    className='radio'
                    id={String(inputID)}
                    name='category'
                    onClick={() => {
                      setExpanded(false);
                      fetchData(inputID);
                      setSelectedGenre(labelContent);
                    }}
                  />
                  <label htmlFor={String(labelHtmlFor)}>{labelContent}</label>
                </li>
              ))}
            </ul>
          )}
        </Accordion>

        <GenreActiveIndicator className='btn-pink'>
          {selectedGenre}
        </GenreActiveIndicator>
      </div>

      {/* Tablet and up */}
      <MediaQuery minWidth={768}>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className={layoutValues.length > 0 && 'hasChildElement'}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            ref={layoutFilterButtonRef}
          >
            <Typography>em {selectedLayout}</Typography>
          </AccordionSummary>

          {layoutValues.length > 0 && (
            <ul>
              {layoutValues.map(({ inputID, labelHtmlFor, labelContent }) => (
                <li
                  key={inputID}
                  className={`option-item ${
                    inputID === selectedLayout ? 'selected' : ''
                  }`}
                >
                  <input
                    type='radio'
                    className='radio'
                    id={inputID}
                    name='category'
                    onClick={() => {
                      setExpanded(false);
                      setSelectedLayout(inputID);
                    }}
                  />
                  <label htmlFor={labelHtmlFor}>{labelContent}</label>
                </li>
              ))}
            </ul>
          )}
        </Accordion>
      </MediaQuery>
    </Container>
  );
};
