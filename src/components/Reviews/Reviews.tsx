import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
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
    const [review, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({ name: '', text: '' })
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
            <h3 style={{ marginBottom: '20px' }}>
                Пожалуйста, оставьте свой отзыв
            </h3>
            <form>
                <div>
                    Your name
                    <div>
                        <TextField size="small" placeholder="Your name " />
                    </div>
                </div>
                <div>
                    Your text
                    <div>
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Your text "
                        />
                    </div>
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
