export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/saurabhpandey550')
        return response.json()
    } catch (err) {
        console.log(err, 'git error')
    }
}