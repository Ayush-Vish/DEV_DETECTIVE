const get = (id) =>{
    return document.getElementById(`${id}`)
}
const url = 'https://api.github.com/users/'
const btn = get('search-btn')
const input  = get('input-username')

btn.addEventListener("click" , (e) => {
    if(input.value !== null) {
        console.log(input.value)
        getUserData(`${url}${input.value}`) 
    }
})

input.addEventListener('keydown' , ( e) => {
    if(e.key === 'Enter') {
        console.log(input.value)
        if(input.value !== null) {
            getUserData(url + input.value)
        }
    }

})


async function getUserData(gitUrl) {
    try {
    console.log("YAha Tak")
    console.log(gitUrl)
    let response = await fetch(gitUrl) 
    const data =await response.json()
    console.log("Thisfjsbdlgsdh" ,data)
    console.log("shjhjshdsjhd");
    updateUserInfo(data)    
    } catch (error) {
        console.error()
    }
}
function updateUserInfo(data)  {
    if(data) {
            const login = get('login')
        const bio = get('bio')
        const image = get('userImage')
        const noOfRepos =get('repos')
        const followers= get('followers')
        const following =get('following')
        const location = get("location")
        const email =  get('email')
        const blog = get('blog')
        const dateJoined = get('dateJoined')
        const username =  get("username") 
        const hireable = get('hireable')
        const twitter = get('twitter')
        console.log(data?.name)
        username.innerText  =  data?.name
        const link = get("userId")
        console.log(data?.html_url)
        link.href = data?.html_url
        login.innerText = data?.login
        bio.innerText = data?.bio
        followers.innerText =data?.followers
        following.innerText=data?.following
        noOfRepos.innerText = data?.public_repos
        image.src=data?.avatar_url
        location.innerText = data?.location===null ? "Not Available":data.location;
        email.href = data?.email
        let datesArray =  data?.created_at
        datesArray = datesArray.split("-")
        dateJoined.innerText=`Date Joined- ${datesArray[2].split("T")[0]}- ${datesArray[1]}-${datesArray[0]}`
        console.log(datesArray)
        blog.innerText = data?.blog 
        hireable.innerText = data?.hireable===null ? "Not Hirable " : data?.hireable;
        twitter.innerText = data?.twitter_username === null ? "Not Available ": data.twitter_username
    }
    else {

    }
}



