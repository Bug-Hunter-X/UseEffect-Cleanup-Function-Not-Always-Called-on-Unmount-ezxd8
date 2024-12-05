```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Use isMountedRef to ensure component is still mounted before executing
    return () => {
      isMountedRef.current = false;
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    if (isMountedRef.current) {
      console.log('Count:', count);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```