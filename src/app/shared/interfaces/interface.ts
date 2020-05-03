
export interface IDistrictKeyValuePair {
  districtName: string
  districtDetails: IDistrictData
}

export interface IDistrictData {
  notes: string
  active: number
  confirmed: number
  deceased: number
  recovered: number
  delta: any
}

export interface IStatesData {
  active: string
  confirmed: string
  deaths: string
  deltaconfirmed: string
  deltadeaths: string
  deltarecovered: string
  lastupdatedtime: string
  recovered: string
  state: string
  statecode: string
  statenotes: string
}

export interface INews {
  title: string
  description: string
  summary: string
  fullNews: string
}

export interface IUserInfo
{
    userId: number,
    emailId: string
    password: string
}

export interface ILoginInfo
{
    emailId: string
    password: string
}