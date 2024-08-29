type Props = {}
const Footer = (props: Props) => {
    return (
        <div
            style={{
                position: 'fixed', // Фиксированное позиционирование
                bottom: 0, // Расположение внизу страницы
                left: 0, // Прижать к левому краю экрана
                height: '50px', // Высота полосы
                color: 'white',
                backgroundColor: '#653c7a', // Цвет фона
                width: '100vw', // Ширина на всю ширину экрана
                zIndex: 1200, // Убедитесь, что полоса находится выше остальных элементов
                textAlign: 'center',
                lineHeight: 3,
            }}
        >
            Оля - молодец
        </div>
    )
}
export default Footer
