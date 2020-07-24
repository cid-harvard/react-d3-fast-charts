import React from 'react';
import { Content } from '../styling/Grid';
import {
  TwoColumnSection,
  SectionHeader,
  Code,
} from '../styling/styleUtils';
import DataViz, {
  VizType,
  StackChartConfig,
  StackChartDatum,
} from 'react-fast-charts';

const config: StackChartConfig = {
  primaryKey: 'year',
  groups: [
    {
      key: 'rest_of_the_world',
      label: 'Rest of the world',
      fill: 'black',
    },
    {
      key: 'mexico',
      label: 'Mexico',
      fill: 'red',
    },
    {
      key: 'netherlands',
      label: 'Netherlands',
    },
    {
      key: 'belgium',
      label: 'Belgium',
      fill: 'blue',
    },
    {
      key: 'canada',
      label: 'Canada',
      fill: 'salmon',
    },
    {
      key: 'ireland',
      label: 'Ireland',
    },
    {
      key: 'germany',
      label: 'Germany',
    },
    {
      key: 'united_kingdom',
      label: 'United Kingdom',
    },
    {
      key: 'italy',
      label: 'Italy',
    },
    {
      key: 'poland',
      label: 'Poland',
    },
    {
      key: 'dominican_republic',
      label: 'Dominican Republic',
    },
  ],
};

const data: StackChartDatum[] = [
  {
    year: 2002,
    rest_of_the_world: 8855,
    mexico: 11486,
    netherlands: 686581,
    belgium: 1678,
    canada: 392642,
    ireland: 71085,
    germany: 14344,
    united_kingdom: 11794,
    italy: 7519,
    poland: 5642,
    dominican_republic: 1355,
  },
  {
    year: 2003,
    rest_of_the_world: 8354,
    mexico: 11951,
    netherlands: 694147,
    belgium: 2240,
    canada: 386142,
    ireland: 95914,
    germany: 13917,
    united_kingdom: 9518,
    italy: 8777,
    poland: 9923,
    dominican_republic: 1377,
  },
  {
    year: 2004,
    rest_of_the_world: 8211,
    mexico: 12405,
    netherlands: 698363,
    belgium: 3109,
    canada: 361144,
    ireland: 73398,
    germany: 13971,
    united_kingdom: 11995,
    italy: 7646,
    poland: 8187,
    dominican_republic: 1470,
  },
  {
    year: 2005,
    rest_of_the_world: 9644,
    mexico: 13740,
    netherlands: 704236,
    belgium: 4851,
    canada: 351015,
    ireland: 101121,
    germany: 14478,
    united_kingdom: 12147,
    italy: 9943,
    poland: 11767,
    dominican_republic: 1450,
  },
  {
    year: 2006,
    rest_of_the_world: 9959,
    mexico: 16318,
    netherlands: 828601,
    belgium: 7211,
    canada: 380863,
    ireland: 98620,
    germany: 14460,
    united_kingdom: 11857,
    italy: 12410,
    poland: 10796,
    dominican_republic: 1503,
  },
  {
    year: 2007,
    rest_of_the_world: 10041,
    mexico: 16204,
    netherlands: 789142,
    belgium: 11436,
    canada: 397821,
    ireland: 105031,
    germany: 15825,
    united_kingdom: 11984,
    italy: 16381,
    poland: 13812,
    dominican_republic: 1432,
  },
  {
    year: 2008,
    rest_of_the_world: 9757,
    mexico: 15858,
    netherlands: 767479,
    belgium: 12200,
    canada: 362440,
    ireland: 109655,
    germany: 13625,
    united_kingdom: 11612,
    italy: 19503,
    poland: 12478,
    dominican_republic: 1502,
  },
  {
    year: 2009,
    rest_of_the_world: 8720,
    mexico: 15210,
    netherlands: 662921,
    belgium: 10391,
    canada: 280890,
    ireland: 101793,
    germany: 12346,
    united_kingdom: 9022,
    italy: 20051,
    poland: 10792,
    dominican_republic: 1546,
  },
  {
    year: 2010,
    rest_of_the_world: 9035,
    mexico: 15787,
    netherlands: 652054,
    belgium: 12078,
    canada: 311936,
    ireland: 100205,
    germany: 14213,
    united_kingdom: 9374,
    italy: 22375,
    poland: 11715,
    dominican_republic: 1431,
  },
  {
    year: 2011,
    rest_of_the_world: 8749,
    mexico: 16688,
    netherlands: 600947,
    belgium: 16111,
    canada: 280736,
    ireland: 115873,
    germany: 13811,
    united_kingdom: 8382,
    italy: 23133,
    poland: 11388,
    dominican_republic: 1348,
  },
  {
    year: 2012,
    rest_of_the_world: 7840,
    mexico: 17809,
    netherlands: 612335,
    belgium: 18017,
    canada: 243315,
    ireland: 110408,
    germany: 9173,
    united_kingdom: 8182,
    italy: 25365,
    poland: 12752,
    dominican_republic: 1516,
  },
  {
    year: 2013,
    rest_of_the_world: 6099,
    mexico: 18618,
    netherlands: 568978,
    belgium: 17206,
    canada: 231047,
    ireland: 108615,
    germany: 8158,
    united_kingdom: 7576,
    italy: 19198,
    poland: 12225,
    dominican_republic: 1153,
  },
  {
    year: 2014,
    rest_of_the_world: 6503,
    mexico: 21524,
    netherlands: 542067,
    belgium: 22213,
    canada: 207130,
    ireland: 82255,
    germany: 6784,
    united_kingdom: 5739,
    italy: 20126,
    poland: 12770,
    dominican_republic: 1120,
  },
  {
    year: 2015,
    rest_of_the_world: 6650,
    mexico: 22716,
    netherlands: 570892,
    belgium: 27175,
    canada: 201833,
    ireland: 106226,
    germany: 7161,
    united_kingdom: 5220,
    italy: 19745,
    poland: 13327,
    dominican_republic: 1299,
  },
];

const codeAsString = `import DataViz, {
  VizType,
  StackChartConfig,
  StackChartDatum,
} from 'react-fast-charts';


...


<DataViz
  id={'example-stack-chart'}
  vizType={VizType.StackChart}
  config={config}
  data={data}
/>
`;

const configAsString = `
const config: StackChartConfig = {
  primaryKey: 'year',
  groups: [
    {
      key: 'rest_of_the_world',
      label: 'Rest of the world',
      fill: 'black',
    },
    {
      key: 'mexico',
      label: 'Mexico',
      fill: 'red',
    },
    {
      key: 'netherlands',
      label: 'Netherlands',
    },
    {
      key: 'belgium',
      label: 'Belgium',
      fill: 'blue',
    },
    {
      key: 'canada',
      label: 'Canada',
      fill: 'salmon',
    },
    {
      key: 'ireland',
      label: 'Ireland',
    },
    {
      key: 'germany',
      label: 'Germany',
    },
    {
      key: 'united_kingdom',
      label: 'United Kingdom',
    },
    {
      key: 'italy',
      label: 'Italy',
    },
    {
      key: 'poland',
      label: 'Poland',
    },
    {
      key: 'dominican_republic',
      label: 'Dominican Republic',
    },
  ],
};
`;

const dataAsString = `
const data: StackChartDatum[] = [
  {
    year: 2002,
    rest_of_the_world: 8855,
    mexico: 11486,
    netherlands: 686581,
    belgium: 1678,
    canada: 392642,
    ireland: 71085,
    germany: 14344,
    united_kingdom: 11794,
    italy: 7519,
    poland: 5642,
    dominican_republic: 1355,
  },
  {
    year: 2003,
    rest_of_the_world: 8354,
    mexico: 11951,
    netherlands: 694147,
    belgium: 2240,
    canada: 386142,
    ireland: 95914,
    germany: 13917,
    united_kingdom: 9518,
    italy: 8777,
    poland: 9923,
    dominican_republic: 1377,
  },
  {
    year: 2004,
    rest_of_the_world: 8211,
    mexico: 12405,
    netherlands: 698363,
    belgium: 3109,
    canada: 361144,
    ireland: 73398,
    germany: 13971,
    united_kingdom: 11995,
    italy: 7646,
    poland: 8187,
    dominican_republic: 1470,
  },
  {
    year: 2005,
    rest_of_the_world: 9644,
    mexico: 13740,
    netherlands: 704236,
    belgium: 4851,
    canada: 351015,
    ireland: 101121,
    germany: 14478,
    united_kingdom: 12147,
    italy: 9943,
    poland: 11767,
    dominican_republic: 1450,
  },
  {
    year: 2006,
    rest_of_the_world: 9959,
    mexico: 16318,
    netherlands: 828601,
    belgium: 7211,
    canada: 380863,
    ireland: 98620,
    germany: 14460,
    united_kingdom: 11857,
    italy: 12410,
    poland: 10796,
    dominican_republic: 1503,
  },
  {
    year: 2007,
    rest_of_the_world: 10041,
    mexico: 16204,
    netherlands: 789142,
    belgium: 11436,
    canada: 397821,
    ireland: 105031,
    germany: 15825,
    united_kingdom: 11984,
    italy: 16381,
    poland: 13812,
    dominican_republic: 1432,
  },
  {
    year: 2008,
    rest_of_the_world: 9757,
    mexico: 15858,
    netherlands: 767479,
    belgium: 12200,
    canada: 362440,
    ireland: 109655,
    germany: 13625,
    united_kingdom: 11612,
    italy: 19503,
    poland: 12478,
    dominican_republic: 1502,
  },
  {
    year: 2009,
    rest_of_the_world: 8720,
    mexico: 15210,
    netherlands: 662921,
    belgium: 10391,
    canada: 280890,
    ireland: 101793,
    germany: 12346,
    united_kingdom: 9022,
    italy: 20051,
    poland: 10792,
    dominican_republic: 1546,
  },
  {
    year: 2010,
    rest_of_the_world: 9035,
    mexico: 15787,
    netherlands: 652054,
    belgium: 12078,
    canada: 311936,
    ireland: 100205,
    germany: 14213,
    united_kingdom: 9374,
    italy: 22375,
    poland: 11715,
    dominican_republic: 1431,
  },
  {
    year: 2011,
    rest_of_the_world: 8749,
    mexico: 16688,
    netherlands: 600947,
    belgium: 16111,
    canada: 280736,
    ireland: 115873,
    germany: 13811,
    united_kingdom: 8382,
    italy: 23133,
    poland: 11388,
    dominican_republic: 1348,
  },
  {
    year: 2012,
    rest_of_the_world: 7840,
    mexico: 17809,
    netherlands: 612335,
    belgium: 18017,
    canada: 243315,
    ireland: 110408,
    germany: 9173,
    united_kingdom: 8182,
    italy: 25365,
    poland: 12752,
    dominican_republic: 1516,
  },
  {
    year: 2013,
    rest_of_the_world: 6099,
    mexico: 18618,
    netherlands: 568978,
    belgium: 17206,
    canada: 231047,
    ireland: 108615,
    germany: 8158,
    united_kingdom: 7576,
    italy: 19198,
    poland: 12225,
    dominican_republic: 1153,
  },
  {
    year: 2014,
    rest_of_the_world: 6503,
    mexico: 21524,
    netherlands: 542067,
    belgium: 22213,
    canada: 207130,
    ireland: 82255,
    germany: 6784,
    united_kingdom: 5739,
    italy: 20126,
    poland: 12770,
    dominican_republic: 1120,
  },
  {
    year: 2015,
    rest_of_the_world: 6650,
    mexico: 22716,
    netherlands: 570892,
    belgium: 27175,
    canada: 201833,
    ireland: 106226,
    germany: 7161,
    united_kingdom: 5220,
    italy: 19745,
    poland: 13327,
    dominican_republic: 1299,
  },
];
`;

export default () => {
  return (
    <Content>
      <TwoColumnSection>
        <SectionHeader>Stack Chart</SectionHeader>
          <DataViz
            id={'example-stack-chart'}
            vizType={VizType.StackChart}
            config={config}
            data={data}
          />
        <div>
          <Code>
            {codeAsString}
          </Code>
        </div>
      </TwoColumnSection>
      <TwoColumnSection>
          <Code>
            {configAsString}
          </Code>
          <Code>
            {dataAsString}
          </Code>
      </TwoColumnSection>
    </Content>
  );
};

