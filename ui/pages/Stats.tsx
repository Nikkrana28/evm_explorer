import { Box } from '@chakra-ui/react';
import React from 'react';

import appConfig from 'configs/app/config';
import Page from 'ui/shared/Page/Page';
import PageTitle from 'ui/shared/Page/PageTitle';

import ChartsWidgetsList from '../stats/ChartsWidgetsList';
import NumberWidgetsList from '../stats/NumberWidgetsList';
import StatsFilters from '../stats/StatsFilters';
import useStats from '../stats/useStats';

const Stats = () => {
  const {
    isLoading,
    isError,
    sections,
    currentSection,
    handleSectionChange,
    interval,
    handleIntervalChange,
    debounceFilterCharts,
    displayedCharts,
    filterQuery,
  } = useStats();

  return (
    <Page>
      <PageTitle text={ `${ appConfig.network.name } stats` }/>

      <Box mb={{ base: 6, sm: 8 }}>
        <NumberWidgetsList/>
      </Box>

      <Box mb={{ base: 6, sm: 8 }}>
        <StatsFilters
          sections={ sections }
          currentSection={ currentSection }
          onSectionChange={ handleSectionChange }
          interval={ interval }
          onIntervalChange={ handleIntervalChange }
          onFilterInputChange={ debounceFilterCharts }
        />
      </Box>

      <ChartsWidgetsList
        filterQuery={ filterQuery }
        isError={ isError }
        isLoading={ isLoading }
        charts={ displayedCharts }
        interval={ interval }
      />
    </Page>
  );
};

export default Stats;
