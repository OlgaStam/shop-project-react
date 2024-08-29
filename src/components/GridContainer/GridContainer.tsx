import { Box, styled } from '@mui/material'

const GridContainer = styled(Box)(({ theme }) => ({
    display: 'grid', // Устанавливает контейнер как CSS Grid-контейнер
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Определяет колонки сетки: автоматически заполняет пространство, создавая колонки шириной не менее 250px
    gap: theme.spacing(5), // Задает расстояние между элементами сетки (в данном случае использует значение из темы Material-UI)
    alignItems: 'stretch', // Растягивает элементы по высоте самого высокого элемента в ряду
    width: '100%', // Ширина контейнера будет 100% от родительского элемента
}))

export default GridContainer
