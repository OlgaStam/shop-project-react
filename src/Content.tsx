type contetntProps = {
    p1: string
    p2?: string
}
export const Content = ({ p1, p2 = 'ybxtuj' }: contetntProps) => {
    return (
        <>
            <p className="red">{p1}</p>
            <p>{p2}</p>
        </>
    )
}
// export default Content
