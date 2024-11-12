function ChildComponent({child, description}) {
    return (
      <div>
        <h1>{child}</h1>
        <p>{description}</p>
      </div>
    )
  }
  
  
  
  export default function ParentComponent() {
    return (
      <>
      <ChildComponent child="ini title" description="ini description" />
  </>
    )
  }