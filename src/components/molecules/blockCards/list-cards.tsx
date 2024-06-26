import Card from "@/components/atoms/card";
import { Album } from "@/app/intefaces/album";

import album from "../../../../public/images/album.png";
import avatar from "../../../../public/images/avatar.png";

const albums: Album[] = [
  {
    id: 1,
    artist: "Jaime Cantante",
    src: album,
    user: {
      src: avatar,
      name: "@johnti60",
    },
    like: false,
  },
  {
    id: 2,
    artist: "Jaime Cantante",
    src: album,
    user: {
      src: avatar,
      name: "@johnti60",
    },
    like: false,
  },
  {
    id: 3,
    artist: "Jaime Cantante",
    src: album,
    user: {
      src: avatar,
      name: "@johnti60",
    },
    like: false,
  },
  {
    id: 4,
    artist: "Jaime Cantante",
    src: album,
    user: {
      src: avatar,
      name: "@johnti60",
    },
    like: false,
  },
  {
    id: 5,
    artist: "Jaime Cantante",
    src: album,
    user: {
      src: avatar,
      name: "@johnti60",
    },
    like: false,
  },
];

export default function ListCards() {
  return (
    <>
      <ul className="grid grid-cols-auto md:grid-cols-3 lg:grid-cols-5 gap-9">
        {albums.map((album: Album) => {
          return (
            <li key={album.id}>
              <Card {...album} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
