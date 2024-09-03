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

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            // Очистка полей формы
            setNewReview({ name: '', text: '' })
        }
    }

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
                    key={i}
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
            <form onSubmit={onSend}>
                <div>
                    Your name
                    <div>
                        <TextField
                            size="small"
                            placeholder="Your name"
                            value={newReview.name}
                            onChange={handleName}
                        />
                    </div>
                </div>
                <div>
                    Your text
                    <div>
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Your text"
                            value={newReview.text}
                            onChange={handleText}
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
