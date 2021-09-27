import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { fetchGenres, fetchMovieDiscoverWithGenre } from '@pages/api';

import { FetchMovieProps, FetchGenreProps } from '@utils/types/api';

import { Container, GenreActiveIndicator } from './style';

export const FilterButtons = (): JSX.Element => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedLayout, setSelectedLayout] = useState('grid');
  const [selectedGenre, setSelectedGenre] = useState('Populares');
  const [genresApi, setGenresApi] = useState<FetchGenreProps[]>([]);
  const [listFilteredMoviesByGenre, setListFilteredMoviesByGenre] = useState<
    FetchMovieProps[]
  >([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const fetchData = async (genreID: number): Promise<void> => {
    if (genreID) {
      setListFilteredMoviesByGenre(await fetchMovieDiscoverWithGenre(genreID)); // Filtered by genre
    }

    setGenresApi(await fetchGenres()); // Get genre categories
  };

  useEffect(() => {
    fetchData(8);
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
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <Typography>{selectedGenre}</Typography>
          </AccordionSummary>

          <ul>
            {genreValues.map(({ inputID, labelHtmlFor, labelContent }) => (
              <li
                key={inputID}
                className={`option-item ${inputID === 8 ? 'selected' : ''}`}
              >
                <input
                  type='radio'
                  className='radio'
                  id={String(inputID)}
                  name='category'
                  onClick={() => {
                    fetchData(inputID);
                    setSelectedGenre(labelContent);
                  }}
                />
                <label htmlFor={String(labelHtmlFor)}>{labelContent}</label>
              </li>
            ))}
          </ul>
        </Accordion>

        <GenreActiveIndicator className='btn-pink'>
          {selectedGenre}
        </GenreActiveIndicator>
      </div>

      {/* Tablet and up */}
      <MediaQuery minDeviceWidth={768}>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
          >
            <Typography>em {selectedLayout}</Typography>
          </AccordionSummary>

          <ul>
            {layoutValues.map(({ inputID, labelHtmlFor, labelContent }) => (
              <li
                key={inputID}
                className={`option-item ${
                  inputID === 'grid' ? 'selected' : ''
                }`}
              >
                <input
                  type='radio'
                  className='radio'
                  id={inputID}
                  name='category'
                  onClick={() => setSelectedLayout(inputID)}
                />
                <label htmlFor={labelHtmlFor}>{labelContent}</label>
              </li>
            ))}
          </ul>
        </Accordion>
      </MediaQuery>
    </Container>
  );
};
