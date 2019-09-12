module.exports=`
type Query {
    getAllUsers:[User!]!
    getUser(id:ID!):User!
    getPackageById(id:ID!):Package!
    getMember(id:ID!):Member!
    getAllMembers:[Member!]!
    getPackages:[Package!]!
    getMemberBySearch(name:String!):[Member!]!
    getMemberByDate(name:String!):[Member!]!
    getNotification:[Notification!]!
    getPackageBeforeWeek:[Package!]!
  
}
type Mutation {
    createUser(username:String!,email:String!,password:String!):User!
    createMember(firstName:String!,lastName:String!,email:String!,gender:String!, phoneNumber:String! alternateNumber:String!DOB:String!,address:String!):Member!
    createPackage(name:String!,memberShipId:String!,startDate:String!,endDate:String!,fees:String!):Package!
    signUp(username:String!,email:String!,password:String!):AuthPayload
    login(email:String!,password:String!):AuthPayload,
    forgetPassword(username:String!,email:String!,password:String!):User
    updateUser(email:String!,password:String!):User
    updateMemberPackage(email:String!,name:String!,memberShipId:String!,startDate:String!,endDate:String!,fees:String!,previousPackageId:String!):Package
}

type User {
  id: ID!
  username: String!
  password:String!
  email:String!
  notification:[Notification!]!
  readNotificationCount:String
}
type Member {
  id:ID!
  firstName:String!
  lastName:String!
  email:String!
  gender:String!
  phoneNumber:String!
  alternateNumber:String!
  DOB:String!
  package:[Package!]!
  recommanded:[Member!]!
  address:String!
  status:String!
}
type Package {
  id:ID!
  name:String!
  memberShipId:Member!
  startDate:String!
  endDate:String!
  fees:String!
}
type Subscription {
  memberInformation:Member
}
type AuthPayload {
  token:String!
  user:User
}
type Notification {
  id:ID!
  typeofOperation:String!
  category:String!
  owner:User!
  impactedId:String!
  createdAt:String!
}
`;
