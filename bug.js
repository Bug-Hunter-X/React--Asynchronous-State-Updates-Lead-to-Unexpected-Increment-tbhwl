```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
  }, [count]); // Only re-run if 'count' changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Bug: Incorrect asynchronous update of state
    setCount(prevCount => prevCount + 1); // This will overwrite the previous update
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```