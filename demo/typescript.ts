module ModuleValidator {
  import checkChars = CharUtils.notWhiteSpace;
  export interface HasValidator<T> {
    validateValue(): Boolean;
  }

  let x = "hello" as string;

  type A =
    | string
    | number
    | null
    | undefined
    | Record<string, null>
    | { a: string; b: string };

  type B<T> = T extends string ? string : never;

  class Has extends Foo { }

  class HasValidator implements HasValidator<String> {
    /* Processed values */
    static validatedValue: Array<String> = ["", "aa"];
    private myValue: String;

    /**
     * Constructor for <code>HasValidator</code> class
     * @param value for <i>validation</i>
     */
    constructor(valueParameter: String) {
      this.myValue = valueParameter;
      HasValidator.validatedValue.push(value);
    }

    public validateValue(): Boolean {
      var resultValue: Boolean = checkChars(this.myValue);
      this.createInstance();
      return resultValue;
    }

    static createInstance(valueParameter: String): HasValidator {
      return new HasValidator(valueParameter);
    }
  }

  function globalFunction<TypeParameter>(value: TypeParameter) {
    //global function
    return 42;
  }

  HasValidator.createInstance(varUrl).validateValue();
}

function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new AssertionError("Not a string!");
  }
}

class Jockl extends Error {

}

const thisConstant = "foo"

import { isRouteErrorResponse } from 'react-router-dom'
import { AxiosError } from 'axios'

import { Genre, Video, poster_sizes } from './api/tmdb_api.types'

export function getErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error != undefined && error instanceof Error) {
    return error.message
  } else if (error instanceof AxiosError) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.error(error)
    return 'Unknown error'
  }
}

export function getPosterURL({
  path = '',
  width = poster_sizes.w154,
}: {
  path: string
  width: string
}) {
  // https://developer.themoviedb.org/docs/image-basics
  // available sizes: https://developer.themoviedb.org/reference/configuration-details
  return `https://image.tmdb.org/t/p/${width}${path}`
  // the poster_path returned from the API includes `/` at the beginning
}

export function getGenreNames(genresArray: Genre[]): string[] {
  // Takes an array of Genres objects { id: number; name: string } and
  // returns an array of only names string[]
  const genreNames: string[] = []
  genresArray.map((genre: Genre) => {
    genreNames.push(genre.name)
  })
  return genreNames
}

export function getMovieTrailer(videos: Video[]) {
  const baseUrl = `https://www.youtube.com/watch?v=`
  console.table(videos)
  const videoObject = {
    name: videos[0].name,
    id: videos[0].key,
    url: `${baseUrl}${videos[0].key}`,
  }

  if (videos.length > 1) {
    videos.map((vid) => {
      // .includes() is case-sensitive
      if (
        vid.name.toLowerCase().includes('official') &&
        vid.name.toLowerCase().includes('trailer')
      ) {
        console.log(`OFFICIAL TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        videoObject.name = vid.name
        videoObject.url = `${baseUrl}${vid.key}`

        return videoObject
      } else if (vid.name.toLowerCase().includes('trailer')) {
        console.log(`TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        videoObject.name = vid.name
        videoObject.url = `${baseUrl}${vid.key}`

        return videoObject
      }
      return videoObject
    })
  }
  // console.log(`videoObject2:`, videoObject)
  return videoObject
}


export function formatDate(dateString: Date) {
  // if date is in the future, it is for an upcoming movie, show month and date as well
  // if date is in the past, just show the year
  const date = new Date(dateString)
  const today = new Date()
  const lang = 'en-US'

  if (date > today) {
    console.log(`Date is in the future`)
    return date.toLocaleString(lang, { month: 'short', year: 'numeric' })
  } else {
    console.log(`Date has passed`)
    return date.toLocaleString(lang, { year: 'numeric' })
  }
}