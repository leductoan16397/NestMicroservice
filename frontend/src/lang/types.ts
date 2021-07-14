/* eslint-disable @typescript-eslint/no-unused-vars */
interface Header {
    AllJob: string,
    JobBySkills: string,
    JobByTitle: string,
    JobByCompany: string,
    JobByCity: string,
    CompanyReview: string,
    SignIn: string,
    SignOut: string,
    Employers: string,
    Search: string,
    SearchJobPlaceholder: string,
    allCity: string,
    HCM: string,
    HN: string,
    DN: string,
    other: string,
}

interface CompanyDetail {
    tabJobs: string,
    tabReview: string,
}

interface JobCity {
    title: string,
}

interface JobCompany {
    showMore: string,
}
interface JobDetail {
    viewCompanyBtn: string,
}

interface JobSkill {
    title: string,
}

interface JobTitle {
    title: string,
}
interface Job {
    apply: string,
    viewCompanyBtn: string,
}
interface Company {
    searchPlaceholder: string,
    jobs: string,
    follow: string,
    writeReview: string,
    filter: string,
    reviews: string,
    distribution: string,
    managerCare: string,
    officeWorkspace: string,
    cultureFun: string,
    trainingLearning: string,
    salaryBenefits: string,
    overall: string,
    seeAllRatingAndReview: string,
    overallRating: string,
    pushReviewHeader: string,
    reviewCompanyByName: string,
}

interface Review {
    title: string,
    detailedReview: string,
    satisfied: string,
    unsatisfied: string,
    submit: string,
    whatYouLike: string,
    whatNeedImprove: string,
    recommendForFriend: string,
    titleReview: string,
    OTcompensation: string,
    body1: string,
    body2: string,
    overallRating: string,
    writeReview: string,
    topReview: string,
    star: string,
    recommend: string,
    distribution: string,
    managerCare: string,
    officeWorkspace: string,
    cultureFun: string,
    trainingLearning: string,
    salaryBenefits: string,
    overall: string,
    recommendBtn: string,
    notRecommendBtn: string,
    whatLike: string,
    whatImprovement: string,
}

export interface Tranlate {
    header: Header,
    CompanyDetail: CompanyDetail,
    jobCity: JobCity,
    jobCompany: JobCompany,
    jobDetail: JobDetail,
    jobSkill: JobSkill,
    jobTitle: JobTitle,
    job: Job,
    company: Company,
    review: Review,
}
