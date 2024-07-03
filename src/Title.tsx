type titleProps = {
    title: string
    num?: number
}
const Title = ({ title, num = 5 }: titleProps) => {
    return (
        <h1>
            Hello {title} {num}
        </h1>
    )
}
export default Title
