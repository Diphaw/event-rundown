import RundownItem from './RundownItem'

export default function RundownList({ items, onDeleteItem, onEditItem }) {
  return (
    <div className="space-y-4">
      {items.map(item => (
        <RundownItem 
          key={item.id} 
          item={item} 
          onDelete={onDeleteItem} 
          onEdit={onEditItem} 
        />
      ))}
    </div>
  )
}

