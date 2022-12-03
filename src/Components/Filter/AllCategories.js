import Filter from "./Filter";
const AllCategories = () => {
    return (
        <div className="allCategories">
            {["Общая стоматология",
              "Лечение кариеса",
              "Профилактика и косметическая стоматология",
              "Протезирование",
              "Хирургические услуги",
              "Все услуги"]
              .map(category => <Filter key={category} category = {category}/>)}
        </div>
    )
}

export default AllCategories;