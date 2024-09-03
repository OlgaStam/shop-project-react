import { Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

type Review = {
    name: string
    text: string
}

const Reviews = (props: Review) => {
    const arrReviews: Review[] = [
        { name: 'Имя1', text: 'Першій відгук' },
        { name: 'Имя2', text: 'Другий відгук' },
        { name: 'Имя3', text: 'Третій відгук' },
    ]
    const [review, setReview] = useState(arrReviews)

    return (
        <>
            <Typography
                marginTop={'50px'}
                component="h2"
                variant="h3"
                align="center"
            >
                Reviews
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card
                    sx={{
                        margin: '25px 0',
                    }}
                >
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}:</div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
export default Reviews
