import { Locale as L } from '@/types';

export enum SlotType {
  DATE = 'AMAZON.DATE',
  NUMBER = 'AMAZON.NUMBER',
  TIME = 'AMAZON.TIME',
  COLOR = 'AMAZON.Color',
  PHONENUMBER = 'AMAZON.PhoneNumber',
  DURATION = 'AMAZON.DURATION',
  ORDINAL = 'AMAZON.Ordinal',
  AIRPORT = 'AMAZON.Airport',
  ARTIST = 'AMAZON.Artist',
  COUNTRY = 'AMAZON.Country',
  LANGUAGE = 'AMAZON.Language',
  ACTOR = 'AMAZON.Actor',
  AIRLINE = 'AMAZON.Airline',
  ANIMAL = 'AMAZON.Animal',
  AT_CITY = 'AMAZON.AT_CITY',
  AT_REGION = 'AMAZON.AT_REGION',
  BOOK = 'AMAZON.Book',
  CITY = 'AMAZON.City',
  CORPORATION = 'AMAZON.Corporation',
  CREATIVEWORKTYPE = 'AMAZON.CreativeWorkType',
  DAYOFWEEK = 'AMAZON.DayOfWeek',
  DE_CITY = 'AMAZON.DE_CITY',
  DE_FIRST_NAME = 'AMAZON.DE_FIRST_NAME',
  DE_REGION = 'AMAZON.DE_REGION',
  EUROPE_CITY = 'AMAZON.EUROPE_CITY',
  FICTIONALCHARACTER = 'AMAZON.FictionalCharacter',
  FIRSTNAME = 'AMAZON.FirstName',
  FOOD = 'AMAZON.Food',
  FOUR_DIGIT_NUMBER = 'AMAZON.FOUR_DIGIT_NUMBER',
  GB_CITY = 'AMAZON.GB_CITY',
  GB_FIRST_NAME = 'AMAZON.GB_FIRST_NAME',
  GB_REGION = 'AMAZON.GB_REGION',
  GENRE = 'AMAZON.Genre',
  MONTH = 'AMAZON.Month',
  MOVIE = 'AMAZON.Movie',
  MUSICALBUM = 'AMAZON.MusicAlbum',
  MUSICGROUP = 'AMAZON.MusicGroup',
  MUSICIAN = 'AMAZON.Musician',
  MUSICRECORDING = 'AMAZON.MusicRecording',
  PERSON = 'AMAZON.Person',
  RADIOCHANNEL = 'AMAZON.RadioChannel',
  REGION = 'AMAZON.Region',
  ROOM = 'AMAZON.Room',
  SEARCHQUERY = 'AMAZON.SearchQuery',
  SPORT = 'AMAZON.Sport',
  STREETNAME = 'AMAZON.StreetName',
  TVSERIES = 'AMAZON.TVSeries',
  US_CITY = 'AMAZON.US_CITY',
  US_FIRST_NAME = 'AMAZON.US_FIRST_NAME',
  US_STATE = 'AMAZON.US_STATE',
  VIDEOGAME = 'AMAZON.VideoGame',
  ADMINISTRATIVEAREA = 'AMAZON.AdministrativeArea',
  AGGREGATERATING = 'AMAZON.AggregateRating',
  ANAPHOR = 'AMAZON.Anaphor',
  ATHLETE = 'AMAZON.Athlete',
  AUTHOR = 'AMAZON.Author',
  BOOKSERIES = 'AMAZON.BookSeries',
  BROADCASTCHANNEL = 'AMAZON.BroadcastChannel',
  CIVICSTRUCTURE = 'AMAZON.CivicStructure',
  COMIC = 'AMAZON.Comic',
  DESSERT = 'AMAZON.Dessert',
  DEVICETYPE = 'AMAZON.DeviceType',
  DIRECTOR = 'AMAZON.Director',
  DRINK = 'AMAZON.Drink',
  EDUCATIONALORGANIZATION = 'AMAZON.EducationalOrganization',
  EVENTTYPE = 'AMAZON.EventType',
  FESTIVAL = 'AMAZON.Festival',
  FINANCIALSERVICE = 'AMAZON.FinancialService',
  FOODESTABLISHMENT = 'AMAZON.FoodEstablishment',
  GAME = 'AMAZON.Game',
  LANDFORM = 'AMAZON.Landform',
  LANDMARKSORHISTORICALBUILDINGS = 'AMAZON.LandmarksOrHistoricalBuildings',
  LOCALBUSINESS = 'AMAZON.LocalBusiness',
  LOCALBUSINESSTYPE = 'AMAZON.LocalBusinessType',
  MEDICALORGANIZATION = 'AMAZON.MedicalOrganization',
  MOVIESERIES = 'AMAZON.MovieSeries',
  MOVIETHEATER = 'AMAZON.MovieTheater',
  MUSICCREATIVEWORKTYPE = 'AMAZON.MusicCreativeWorkType',
  MUSICEVENT = 'AMAZON.MusicEvent',
  MUSICPLAYLIST = 'AMAZON.MusicPlaylist',
  MUSICVENUE = 'AMAZON.MusicVenue',
  MUSICVIDEO = 'AMAZON.MusicVideo',
  ORGANIZATION = 'AMAZON.Organization',
  POSTALADDRESS = 'AMAZON.PostalAddress',
  PROFESSIONAL = 'AMAZON.Professional',
  PROFESSIONALTYPE = 'AMAZON.ProfessionalType',
  RELATIVEPOSITION = 'AMAZON.RelativePosition',
  RESIDENCE = 'AMAZON.Residence',
  SCREENINGEVENT = 'AMAZON.ScreeningEvent',
  SERVICE = 'AMAZON.Service',
  SOCIALMEDIAPLATFORM = 'AMAZON.SocialMediaPlatform',
  SOFTWAREAPPLICATION = 'AMAZON.SoftwareApplication',
  SOFTWAREGAME = 'AMAZON.SoftwareGame',
  SPORTSEVENT = 'AMAZON.SportsEvent',
  SPORTSTEAM = 'AMAZON.SportsTeam',
  STREETADDRESS = 'AMAZON.StreetAddress',
  TELEVISIONCHANNEL = 'AMAZON.TelevisionChannel',
  TVEPISODE = 'AMAZON.TVEpisode',
  TVSEASON = 'AMAZON.TVSeason',
  VISUALMODETRIGGER = 'AMAZON.VisualModeTrigger',
  WEATHERCONDITION = 'AMAZON.WeatherCondition',
  WRITTENCREATIVEWORKTYPE = 'AMAZON.WrittenCreativeWorkType',
}

export const SlotData = [
  { label: 'Custom', type: null, locales: {} },
  {
    label: 'Date',
    type: SlotType.DATE,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Number',
    type: SlotType.NUMBER,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Time',
    type: SlotType.TIME,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Color',
    type: SlotType.COLOR,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'PhoneNumber',
    immutable: true,
    type: SlotType.PHONENUMBER,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Duration',
    type: SlotType.DURATION,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Ordinal',
    immutable: true,
    type: SlotType.ORDINAL,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Airport',
    type: SlotType.AIRPORT,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Artist',
    type: SlotType.ARTIST,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Country',
    type: SlotType.COUNTRY,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Language',
    type: SlotType.LANGUAGE,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Actor',
    type: SlotType.ACTOR,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Airline',
    type: SlotType.AIRLINE,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Animal',
    type: SlotType.ANIMAL,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  { label: 'AT_CITY', type: SlotType.AT_CITY, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'AT_REGION', type: SlotType.AT_REGION, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  {
    label: 'Book',
    type: SlotType.BOOK,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'City',
    type: SlotType.CITY,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Corporation',
    type: SlotType.CORPORATION,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'CreativeWorkType',
    type: SlotType.CREATIVEWORKTYPE,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'DayOfWeek',
    type: SlotType.DAYOFWEEK,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  { label: 'DE_CITY', type: SlotType.DE_CITY, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'DE_FIRST_NAME', type: SlotType.DE_FIRST_NAME, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'DE_REGION', type: SlotType.DE_REGION, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'EUROPE_CITY', type: SlotType.EUROPE_CITY, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  {
    label: 'FictionalCharacter',
    type: SlotType.FICTIONALCHARACTER,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'FirstName',
    type: SlotType.FIRSTNAME,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Food',
    type: SlotType.FOOD,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'FourDigitNumber',
    type: SlotType.FOUR_DIGIT_NUMBER,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  { label: 'GB_CITY', type: SlotType.GB_CITY, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'GB_FIRST_NAME', type: SlotType.GB_FIRST_NAME, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'GB_REGION', type: SlotType.GB_REGION, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  {
    label: 'Genre',
    type: SlotType.GENRE,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Month',
    type: SlotType.MONTH,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Movie',
    type: SlotType.MOVIE,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'MusicAlbum',
    type: SlotType.MUSICALBUM,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'MusicGroup',
    type: SlotType.MUSICGROUP,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Musician',
    type: SlotType.MUSICIAN,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'MusicRecording',
    type: SlotType.MUSICRECORDING,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Person',
    type: SlotType.PERSON,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'RadioChannel',
    type: SlotType.RADIOCHANNEL,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Region',
    type: SlotType.REGION,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Room',
    type: SlotType.ROOM,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'SearchQuery',
    immutable: true,
    type: SlotType.SEARCHQUERY,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Sport',
    type: SlotType.SPORT,
    locales: [L.DE_DE, L.EN_US, L.PT_BR, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'StreetName',
    type: SlotType.STREETNAME,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'TVSeries',
    type: SlotType.TVSERIES,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  { label: 'US_CITY', type: SlotType.US_CITY, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'US_FIRST_NAME', type: SlotType.US_FIRST_NAME, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  { label: 'US_STATE', type: SlotType.US_STATE, locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_AU, L.EN_GB] },
  {
    label: 'VideoGame',
    type: SlotType.VIDEOGAME,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.EN_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  { label: 'AdministrativeArea', type: SlotType.ADMINISTRATIVEAREA, locales: [L.EN_US] },
  { label: 'AggregateRating', type: SlotType.AGGREGATERATING, locales: [L.EN_US] },
  { label: 'Anaphor', type: SlotType.ANAPHOR, locales: [L.EN_US] },
  { label: 'Athlete', type: SlotType.ATHLETE, locales: [L.EN_US] },
  { label: 'Author', type: SlotType.AUTHOR, locales: [L.EN_US, L.EN_IN, L.EN_AU, L.JA_JP] },
  { label: 'BookSeries', type: SlotType.BOOKSERIES, locales: [L.EN_US] },
  { label: 'BroadcastChannel', type: SlotType.BROADCASTCHANNEL, locales: [L.EN_US] },
  { label: 'CivicStructure', type: SlotType.CIVICSTRUCTURE, locales: [L.EN_US] },
  { label: 'Comic', type: SlotType.COMIC, locales: [L.EN_US] },
  { label: 'Dessert', type: SlotType.DESSERT, locales: [L.EN_US] },
  { label: 'DeviceType', type: SlotType.DEVICETYPE, locales: [L.EN_US] },
  { label: 'Director', type: SlotType.DIRECTOR, locales: [L.EN_US] },
  { label: 'Drink', type: SlotType.DRINK, locales: [L.EN_US] },
  { label: 'EducationalOrganization', type: SlotType.EDUCATIONALORGANIZATION, locales: [L.EN_US] },
  { label: 'EventType', type: SlotType.EVENTTYPE, locales: [L.EN_US] },
  { label: 'Festival', type: SlotType.FESTIVAL, locales: [L.EN_US] },
  { label: 'FinancialService', type: SlotType.FINANCIALSERVICE, locales: [L.EN_US] },
  { label: 'FoodEstablishment', type: SlotType.FOODESTABLISHMENT, locales: [L.EN_US] },
  { label: 'Game', type: SlotType.GAME, locales: [L.EN_US] },
  { label: 'Landform', type: SlotType.LANDFORM, locales: [L.EN_US] },
  {
    label: 'LandmarksOrHistoricalBuildings',
    type: SlotType.LANDMARKSORHISTORICALBUILDINGS,
    locales: [L.EN_US],
  },
  { label: 'LocalBusiness', type: SlotType.LOCALBUSINESS, locales: [L.EN_US, L.EN_CA] },
  { label: 'LocalBusinessType', type: SlotType.LOCALBUSINESSTYPE, locales: [L.EN_US] },
  { label: 'MedicalOrganization', type: SlotType.MEDICALORGANIZATION, locales: [L.EN_US] },
  { label: 'MovieSeries', type: SlotType.MOVIESERIES, locales: [L.EN_US] },
  { label: 'MovieTheater', type: SlotType.MOVIETHEATER, locales: [L.EN_US] },
  { label: 'MusicCreativeWorkType', type: SlotType.MUSICCREATIVEWORKTYPE, locales: [L.EN_US] },
  { label: 'MusicEvent', type: SlotType.MUSICEVENT, locales: [L.EN_US] },
  { label: 'MusicPlaylist', type: SlotType.MUSICPLAYLIST, locales: [L.EN_US] },
  { label: 'MusicVenue', type: SlotType.MUSICVENUE, locales: [L.EN_US] },
  { label: 'MusicVideo', type: SlotType.MUSICVIDEO, locales: [L.EN_US] },
  { label: 'Organization', type: SlotType.ORGANIZATION, locales: [L.EN_US] },
  { label: 'PostalAddress', type: SlotType.POSTALADDRESS, locales: [L.EN_US] },
  { label: 'Professional', type: SlotType.PROFESSIONAL, locales: [L.EN_US] },
  { label: 'ProfessionalType', type: SlotType.PROFESSIONALTYPE, locales: [L.EN_US] },
  { label: 'RelativePosition', type: SlotType.RELATIVEPOSITION, locales: [L.EN_US] },
  { label: 'Residence', type: SlotType.RESIDENCE, locales: [L.EN_US] },
  { label: 'ScreeningEvent', type: SlotType.SCREENINGEVENT, locales: [L.EN_US] },
  { label: 'Service', type: SlotType.SERVICE, locales: [L.EN_US] },
  { label: 'SocialMediaPlatform', type: SlotType.SOCIALMEDIAPLATFORM, locales: [L.EN_US] },
  { label: 'SoftwareApplication', type: SlotType.SOFTWAREAPPLICATION, locales: [L.EN_US] },
  { label: 'SoftwareGame', type: SlotType.SOFTWAREGAME, locales: [L.EN_US] },
  { label: 'SportsEvent', type: SlotType.SPORTSEVENT, locales: [L.EN_US] },
  { label: 'SportsTeam', type: SlotType.SPORTSTEAM, locales: [L.EN_US] },
  { label: 'StreetAddress', type: SlotType.STREETADDRESS, locales: [L.EN_US] },
  { label: 'TelevisionChannel', type: SlotType.TELEVISIONCHANNEL, locales: [L.EN_US] },
  { label: 'TVEpisode', type: SlotType.TVEPISODE, locales: [L.EN_US] },
  { label: 'TVSeason', type: SlotType.TVSEASON, locales: [L.EN_US] },
  { label: 'VisualModeTrigger', type: SlotType.VISUALMODETRIGGER, locales: [L.EN_US, L.FR_FR] },
  { label: 'WeatherCondition', type: SlotType.WEATHERCONDITION, locales: [L.EN_US] },
  { label: 'WrittenCreativeWorkType', type: SlotType.WRITTENCREATIVEWORKTYPE, locales: [L.EN_US] },
];
