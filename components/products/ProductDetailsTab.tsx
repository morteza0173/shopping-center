import { Product } from "@/utils/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "../ui/table";

function ProductDetailsTab({ product }: { product: Product }) {
  return (
    <Tabs
      dir="rtl"
      orientation="vertical"
      defaultValue="introduction"
      className="flex w-full h-full mt-12"
    >
      <TabsList className="grid grid-rows-3 h-36 mt-4">
        <TabsTrigger value="introduction" className="text-xs md:text-sm">
          معرفی
        </TabsTrigger>
        <TabsTrigger value="Specifications" className="text-xs md:text-sm">
          مشخصات
        </TabsTrigger>
        <TabsTrigger value="comments" className="text-xs md:text-sm">
          دیدگاه ها
        </TabsTrigger>
      </TabsList>
      <TabsContent value="introduction" className="px-2">
        <Card>
          <CardContent>
            <div
              className="mt-6 text-muted-foreground leading-loose text-xs md:text-base"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Specifications" className="w-full px-2">
        <Table className="w-full">
          <TableCaption>
            اگر سوالی در مورد محصول دارید با ما تماس بگیرید
          </TableCaption>
          <TableBody>
            {product.attributes.map((attribute, index) => {
              return (
                <TableRow key={index} className="grid grid-cols-3">
                  <TableCell className="font-medium py-4 col-span-1 text-xs md:text-base">
                    {attribute.name}
                  </TableCell>
                  <TableCell className="col-span-2 text-xs md:text-base">
                    {attribute.options[0]}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
export default ProductDetailsTab;
