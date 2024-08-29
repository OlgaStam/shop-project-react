import { Button, TextField, Box } from '@mui/material'
import { styled } from '@mui/system' // Для кастомных стилей

type Props = {
    minCount: number // Минимальное количество товара
    count: number // Текущее количество товара
    onDecrementClick: () => void // Функция для уменьшения количества
    onIncrementClick: () => void // Функция для увеличения количества
}

// Кастомизация TextField
const CenteredTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        textAlign: 'center', // Центрируем текст по горизонтали
        height: '100%', // Высота в 100% для соответствия высоте контейнера
        display: 'flex', // Используем flexbox для вертикального выравнивания
        alignItems: 'center', // Выравниваем элементы по центру по вертикали
        padding: 0, // Убираем внутренние отступы
    },
    '& .MuiInputBase-root': {
        height: '40px', // Устанавливаем высоту для соответствия высоте кнопок
    },
})

const Quantity = ({
    minCount,
    count,
    onDecrementClick,
    onIncrementClick,
}: Props) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="200px" // Устанавливаем максимальную ширину для контейнера
            marginTop="16px"
            marginLeft="auto"
            marginRight="auto"
        >
            {/* Кнопка для уменьшения количества товара */}
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count === minCount} // Деактивировать кнопку, если достигнут минимальный лимит
                style={{
                    minWidth: '40px',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                }} // Устанавливаем фиксированную ширину для кнопок
            >
                -
            </Button>

            {/* Поле для отображения текущего количества товара */}
            <CenteredTextField
                value={count} // Значение поля равно текущему количеству
                size="small" // Устанавливаем размер поля
                InputProps={{
                    readOnly: true, // Делаем поле только для чтения
                }}
                style={{
                    minWidth: '40px', // Устанавливаем фиксированную ширину для поля
                    marginLeft: '5px',
                    marginRight: '5px',
                }}
            />

            {/* Кнопка для увеличения количества товара */}
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count === 10} // Деактивировать кнопку, если достигнут максимальный лимит
                style={{ minWidth: '40px' }} // Устанавливаем фиксированную ширину для кнопок
            >
                +
            </Button>
        </Box>
    )
}

export default Quantity
