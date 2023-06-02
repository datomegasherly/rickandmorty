import { gql } from "graphql-request";
interface residentInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface episodeInterface {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

interface originInterface {
  id: string | null;
  name: string;
  type: string | null;
  dimension: string | null;
  residents: residentInterface[];
}

interface locationInterface {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: residentInterface[];
}

export interface characterInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location?: locationInterface;
  origin?: originInterface;
  episode?: episodeInterface;
}

/** main queries */
const originQuery = `
origin {
  id
  name
  type
  dimension
  residents {
    id
    name
    status
    species
    type
    gender
  }
}
`;

const locationQuery = `
location {
  id
  name
  type
  dimension
  residents {
    id
    name
  }
}`;

const episodeQuery = `
episode {
  id
  name
  air_date
  episode
}
`;

/** info query used to get fetched data count and pages */
const infoQuery = `
  info {
    count
    pages
    next
    prev
  }
`;

export const charactersList = (page: number, fetchInfo: boolean) => gql`
  query {
    characters(page: ${page}) {
      ${fetchInfo ? infoQuery : ""}
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;
