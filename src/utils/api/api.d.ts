interface MutationSettings<Params = void, Func = unknown> {
  config?: RequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface QuerySettings<Func = unknown> {
  config?: RequestOptions;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}

interface InfiniteQuerySettings<Func = unknown> {
  config?: RequestOptions;
  options?: Omit<
    import('@tanstack/react-query').UseInfiniteQueryOptions<
      Awaited<ReturnTyp<Func>>,
      any,
      Awaited<ReturnTyp<Func>>,
      any,
      import('@tanstack/react-query').QueryKey,
      number
    >,
    'queryKey'
  >;
}

type BaseUrl = string;
type RequestMethod = RequestInit['method'];
type HttpClientSearchParams = { [key: string]: string | number | boolean | string[] };

type _RequestConfig = RequestInit & {
  url: string;
  _retry?: boolean;
  headers?: Record<string, string>;
  params?: HttpClientSearchParams;
};
interface InterceptorResponseResult {
  headers: Response['headers'];
  success: Response['ok'];
  status: Response['status'];
  statusText: Response['statusText'];
  url: string;
  data: any;
}
type SuccessResponseFun = (res: InterceptorResponseResult) => InterceptorResponseResult['data'];
type SuccessRequestFun = (options: _RequestConfig) => _RequestConfig;

type ResponseError = Error & { config: _RequestConfig; response: InterceptorResponseResult };
type FailureResponseFun = (e: ResponseError) => any;
type FailureRequestFun = (e: ResponseError) => any;

interface RequestInterceptor {
  onSuccess?: SuccessRequestFun;
  onFailure?: FailureRequestFun;
}

interface ResponseInterceptor {
  onSuccess?: SuccessResponseFun;
  onFailure?: FailureResponseFun;
}
interface Interceptors {
  request?: RequestInterceptor[];
  response?: ResponseInterceptor[];
}

interface RequestOptions extends Omit<RequestInit, 'method'> {
  headers?: Record<string, string>;
  params?: HttpClientSearchParams;
}

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface BaseResponse {
  message: string;
}

type LegalType = 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';

type Stage = 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';

type UserRole = 'organizer' | 'partner';

type ActivityCategory =
  | 'COOKING'
  | 'CULTURE'
  | 'MEDIA'
  | 'EDUCATION'
  | 'ENTERTAINMENT'
  | 'SPORT'
  | 'CHALLENGE';

type ActivityStatus = 'DRAFT' | 'MODERATION' | 'EDITING' | 'PUBLISHED' | 'CLOSED';

type ActivityView = 'ONLINE' | 'OFFLINE';

type Gender = 'MALE' | 'FEMALE';

interface CategoryResponse {
  name: string;
}

interface LegalInformation {
  fullNameOfTheLegalEntity?: string | null;
  legalAddress?: string | null;
  postAddress?: string | null;
  inn?: string | null;
  kpp?: string | null;
  ogrn?: string | null;
}

interface OrganizationResponse {
  contactName: string;
  phone: number;
  email?: string | null;
  site?: string | null;
  social?: string[] | null;
  background?: string | null;
  avatar?: string | null;
  locality?: string | null;
  id: string;
  name: string;
  description?: string | null;
  information?: LegalInformation | null;
  requisites?: RequisitesDto | null;
  stage: Stage;
  type: LegalType;
}

interface WorkingTimeDto {
  hour: number;
  minutes: number;
}

interface WorkingHourDto {
  day: number;
  from: WorkingTimeDto;
  to: WorkingTimeDto;
  dayOff: boolean;
}

interface OrganizationAddressDto {
  organizationId: string;
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto[];
}

interface AddEmployeeDto {
  legalEntityId?: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  file?: File;
}

interface DeleteEmployeeDto {
  id: string;
}

interface EditEmployeeDto {
  userId: string;
  legalEntityId?: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  image?: File;
}

interface RegisterOrganizationDto {
  organization: string;
  location: string;
  type: LegalType;
  contactName: string;
  phone: string;
}

interface CreateActivityDto {
  name: string;
  category: string;
  description?: string;
  ageLimit: number[];
  price: number;
  duration: number;
  replay: boolean;
  organizationId: string;
  files?: File[];
}

interface Time {
  hour: number;
  minutes: number;
}

interface Schedule {
  address: {
    country?: string;
    region?: string;
    city?: string;
    postalCode?: string;
    street?: string;
    house?: string;
    flat?: number;
    geoLat?: number;
    geoLon?: number;
    unrestrictedValue?: string;
    value?: string;
    cityWithType?: string;
    settlement?: string;
    settlementWithType?: string;
  };
  leadingEmployeeId: string;
  entry: boolean;
  regular: boolean;
  date: Date;
  time: Time;
  maxNumberOfParticipants: number;
  period: number[];
}
type MediaType = 'IMAGE' | 'VIDEO';

type MediaFlag = 'AVATAR' | 'COVER' | null;

interface MediaDto {
  id: string;
  type: MediaType;
  flag: MediaFlag;
  url: string;
}

interface ActivityResponse {
  id: string;
  media: MediaDto[];
  name: string;
  description?: string;
  ageLimit: number[];
  price: number;
  nutsCount: number;
  duration: number;
  replay: boolean;
  view: ActivityView;
  status: ActivityStatus;
  category: string;
  participants: number;
  likes: number;
  schedule?: Schedule[];
}

interface ActivityWithPaginationResponse {
  rows: ActivityResponse[];
  pagination: PaginationResponse;
}

interface ActivityWithPaginationResponse {
  rows: ActivityResponse[];
  pagination: PaginationResponse;
}

interface LoginEmailDto {
  email: string;
  password: string;
}

interface OrganizationListPaginationResponse {
  rows: OrganizationListResponse[];
  pagination: PaginationResponse;
}

interface ActivitiesResponse {
  id: string;
  organization: string;
  activity: string;
  location: string;
  status: ActivityStatus;
  category: ActivityCategory;
  view: ActivityView;
}

interface ActivitiesPaginationResponse {
  rows: ActivitiesResponse[];
  pagination: PaginationResponse;
}

interface GenerateNewCodeResponse {
  success: boolean;
  message?: string;
}

interface PaginationResponse {
  limit: number;
  current: number;
  count: number;
}

interface OrganizationAddressDto {
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto;
}

interface WorkingHourDto {
  day: number;
  from: { hour: number; minutes: number };
  to: { hour: number; minutes: number };
  dayOff: boolean;
}

interface OrganizationInformationDto {
  contactName?: string;
  phone?: string;
  email?: string;
  site?: string;
  city?: string;
  social?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  fullNameOfTheLegalEntity?: string;
  legalAddress?: string;
  postAddress?: string;
  inn?: string;
  kpp?: string;
  ogrn?: string;
}

interface RequisitesDto {
  bank?: string | null;
  bik?: string | null;
  checkingAccount?: string | null;
}

interface DashBoardResponse {
  partners: Legals;
  sponsors: Legals;
  applications: number;
  negotiation: number;
  tariffChange: number;
}

interface Legals {
  total: number;
  growthPerMonth: number;
}

interface ActivitiesDashBoardResponse {
  total: Legals;
  active: Legals;
  moderation: number;
  draft: number;
  edit: number;
}

type Role = 'SUPERADMIN' | 'ADMIN' | 'USER' | 'MANAGER' | 'MODERATOR' | 'SUPPORT';

interface UserResponse {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  roles: Role[];
  isBlocked: boolean;
  isActive: boolean;
  name: string;
  surname: string;
  middleName: string;
  lastLogin: string;
  passportId: string;
  sex: Gender;
  avatar: string;
}

interface EmployeeDto {
  id: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  status: string;
  image: string;
}

interface UpdateOrganizationDto {
  id?: string;
  locality?: string;
  name?: string;
  description?: string;
  inn?: string;
  information?: OrganizationInformationDto;
  requisites?: RequisitesDto;
  stage?: string;
}

interface OrganizationListResponse {
  id: string;
  name: string;
  locality: string;
  tariff: string;
  countDays: string;
  stage: Stage;
  type: LegalType;
}

interface AddressResponse {
  details: string;
  house: string;
  locality: string;
  street: string;
  workingHours: WorkingHourDto[];
  id: string;
}

interface UpdateAddressDto {
  details?: string;
  house?: string;
  locality?: string;
  street?: string;
  workingHours?: WorkingHourDto[];
  id: string;
}

interface CreateAddressDto {
  details: string;
  house: string;
  locality: string;
  street: string;
  workingHours: WorkingHourDto[];
  legalEntityId: string;
}

type TariffStatus = 'ACTIVE' | 'COORDINATION';

interface TariffResponse {
  id: string;
  freeActivity: number;
  paidActivity: number;
  freeActivityPrice: string;
  paidActivityPrice: string;
  maxPricePaidActivity: string;
  freeActivityNuts: number;
  paidActivityNuts: number;
  totalPrice: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
  periodMonth: number;
  dateStart: string;
  dateEnd: string;
  status: TariffStatus;
}

interface UpdateTariffDto {
  id: string;
  freeActivity?: number;
  paidActivity?: number;
  freeActivityPrice?: string;
  paidActivityPrice?: string;
  maxPricePaidActivity?: string;
  freeActivityNuts?: number;
  paidActivityNuts?: number;
  totalPrice?: string;
  periodMonth?: number;
  status?: TariffStatus;
}

interface CreateChangesDto {
  criteria: string;
  old?: Record<string, any>;
  new: Record<string, any>;
  action: string;
}

interface ChangesResponse {
  id: string;
  createdAt: string;
  author: string;
  criteria: string;
  old: Record<string, any>;
  new: Record<string, any>;
  action: string;
}

interface ChangesResponseWithPagination {
  rows: ChangesResponse[];
  pagination: PaginationResponse;
}

type ProfileSettingsRoleFixMe = 'CHILD' | 'PARENT' | 'PARTICIPANT';

interface ChildProfileSettingsResponseFixMe {
  id: string;
  userId: string;
  name: string;
  surname: string;
  role: ProfileSettingsRoleFixMe;
}

interface ParticipantProfileSettingsResponseFixMe {
  id: string;
  userId: string;
  name: string;
  surname: string;
  children: ChildProfileSettingsResponseFixMe[];
  role: ProfileSettingsRoleFixMe;
}

interface OrganizationActivityFixMe {
  id: string;
  name: string;
  category: string;
  time: Time;
  avatar?: string;
}
