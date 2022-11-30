import Filter from "./Filter";
const AllCategories = () => {
    return (
        <div>
            {["Общая стоматология", "Лечение кариеса", "Профилактика и косметическая стоматология", "Протезирование", "Хирургические услуги", "Все услуги"].map(category => <Filter category = {category}/>)}
        </div>
    )
}

export default AllCategories;