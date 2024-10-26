import { useState } from "react";
import "./App.css";
import { FileUpload } from "./components/ui/file-upload";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./components/ui/button";
import { Trash2 } from "lucide-react";

interface Item {
  name: string;
  imgLink: string;
}

interface DisasterItem extends Item {
  status: "Good" | "Damaged";
  afterImgLink: string;
}

const sampleItems = [
  {
    name: "chair",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
  {
    name: "table",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
  {
    name: "furniture",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
];

const sampleDisasterItems: Array<DisasterItem> = [
  {
    name: "chair",
    status: "Good",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
    afterImgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
  {
    name: "chair",
    status: "Good",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
    afterImgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
  {
    name: "chair",
    status: "Good",
    imgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
    afterImgLink:
      "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
  },
];
function App() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const handleNormalUpload = (files: File[]) => {
    // do server upload here
    console.log(files);
    setItems([
      ...items,
      {
        name: "chair",
        imgLink:
          "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
      },
    ]);
    setIsImageUploaded(true);
  };

  // After normal image is uploaded
  const [items, setItems] = useState<Array<Item>>(sampleItems);
  const deleteItem = (index: number) => {
    setItems((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  // After disaster image is uploaded
  const [isDisasterUploaded, setIsDisasterUploaded] = useState(false);
  const handleDisasterUpload = (files: File[]) => {
    // do server upload here
    console.log(files);
    setDisasterItems([
      ...disasterItems,
      {
        name: "chair",
        status: "Good",
        imgLink:
          "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
        afterImgLink:
          "https://t4.ftcdn.net/jpg/03/21/42/87/360_F_321428779_l8oQrLjoqZM5TIW22IAapbpOg0wgKufw.jpg",
      },
    ]);
    setIsDisasterUploaded(true);
  };
  const [disasterItems, setDisasterItems] =
    useState<Array<DisasterItem>>(sampleDisasterItems);
  const deleteDisasterItem = (index: number) => {
    setDisasterItems((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  if (!isImageUploaded) {
    return (
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="px-20 py-20 border-4 rounded-lg flex flex-col items-center ">
          <h2 className="text-4xl mb-12">Image Upload</h2>
          <FileUpload onChange={handleNormalUpload} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-20 mx-20 mb-40">
        <h2 className="text-4xl mb-20">Items</h2>
        <Table>
          <TableCaption>A list of all items found.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <img
                      className="w-40 h-40"
                      src={item.imgLink}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      <Trash2 className="w-12 h-12" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {!isDisasterUploaded ? (
          <div className="flex items-center justify-center mt-20">
            <div className="px-20 py-20 border-4 rounded-lg flex flex-col items-center ">
              <h2 className="text-4xl mb-4">Got into a disaster?</h2>
              <p className="text-muted-foreground">We got your back!</p>
              <FileUpload onChange={handleDisasterUpload} />
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-4xl mt-20 mb-20">Items After Disaster</h2>
            <Table>
              <TableCaption>A list of all items found.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {disasterItems.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>
                        <img
                          className="w-40 h-40"
                          src={item.imgLink}
                          alt={item.name}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => {
                            deleteDisasterItem(index);
                          }}
                        >
                          <Trash2 className="w-12 h-12" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        )}
      </div>
    );
  }
}

export default App;
