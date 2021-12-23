# WebSocket messenger

## Usage

Just open two instances of this application and start messaging :) 

## Features

PWA, Message cache

## Data format

Messages from other applications must conform to this format to be displayed correctly. 

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
