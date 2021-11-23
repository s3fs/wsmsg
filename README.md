# WebSocket messenger

## Data format

```
{
  type: string,
  id: number,
  data: string,
  time: string,
  author: {
    initials: string,
    id: number,
    avatar: string(base64)
  }
}
```
