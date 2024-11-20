"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { addProductSchema } from "@/utils/zodSchema";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function AddProduct() {
  const addProductform = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      regular_price: "",
      attributes: [],
    },
  });

  const { control, setValue, getValues } = addProductform;

  type Attribute = {
    id: number;
    name: string;
    options: string[];
  };

  //افزودن ویژگی
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  useEffect(() => {
    setValue("attributes", attributes);
  }, [attributes, setValue]);

  useEffect(() => {
    addProductform.setValue("attributes", attributes);
  }, [attributes, addProductform]);

  const handleAddAttribute = () => {
    const newAttribute: Attribute = {
      id: Date.now(),
      name: "",
      options: [""],
    };
    const getValueForm = getValues();
    const attributes = getValueForm.attributes || [];

    const updatedAttributes = [
      ...attributes.map((attribute: Partial<Attribute>) => ({
        id: attribute.id ?? Date.now(),
        name: attribute.name ?? "",
        options: attribute.options ?? [""],
      })),
      newAttribute,
    ];
    setAttributes(updatedAttributes);
  };

  //حدف ویژگی ها
  const handleRemoveAttribute = (id: number) => {
    const getValueForm = getValues();
    const attributes = getValueForm.attributes || [];

    const updatedAttributes = [
      ...attributes.map((attribute: Partial<Attribute>) => ({
        id: attribute.id ?? Date.now(),
        name: attribute.name ?? "",
        options: attribute.options ?? [""],
      })),
    ];
    setAttributes(updatedAttributes.filter((attribute) => attribute.id !== id));
  };

  //ثبت محصول
  function onSubmit(data: z.infer<typeof addProductSchema>) {
    const formValues = addProductform.getValues();
    console.log("Attributes in form:", data.attributes); 

    const updatedAttributes = (formValues.attributes ?? []).map(
      (attribute) => ({
        ...attribute,
        position: 0,
        visible: true,
        variation: false,
        id: 0,
      })
    );

    const updatedData = {
      ...formValues,
      attributes: updatedAttributes,
    };
    console.log(updatedData);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(updatedData, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mb-8 capitalize p-2">
        افزودن محصول
      </h1>
      <div className="border p-8 rounded-md">
        <Form {...addProductform}>
          <form
            onSubmit={addProductform.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            {/* نام محصول */}
            <FormField
              control={addProductform.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام محصول</FormLabel>
                  <FormControl>
                    <Input placeholder="عنوان محصول" {...field} />
                  </FormControl>
                  <FormDescription>
                    نام محصول نمیتواند کمتر از 5 حرف و بیشتر از 30 حرف باشد
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* توضیحات محصول */}
            <FormField
              control={addProductform.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات محصول</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-40"
                      placeholder="توضیحات خود را اینجا وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    در توضیحات محصول میتوانید از تگ های html استفاده کنید ،
                    همچنین باید شامل 60 کلمه باشد
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* قیمت عادی محصول */}
              <FormField
                control={addProductform.control}
                name="regular_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>قیمت محصول</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="قیمت به تومان"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>قیمت محصول بدون تخفیف</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* قیمت تخفیف خورده محصول  */}
              <FormField
                name="sale_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>قیمت تخفیف خورده</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="قیمت تخفیف خورده"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      اگر محصول تخفیف خورده وارد کنید در غیر این صورت خالی
                      بگذارید
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* توضیحات کوتاه محصول */}
            <FormField
              control={addProductform.control}
              name="short_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات کوتاه محصول</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-20"
                      placeholder="توضیحات کوتاه خود را اینجا وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    توضیحات کوتاه حداقل 10 کلمه باشد
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* افزودن ویژگی ها */}
            <div>
              <Button
                type="button"
                variant="secondary"
                onClick={handleAddAttribute}
                className="my-6"
              >
                افزودن ویژگی
              </Button>
              {attributes.map((attribute, index) => (
                <div
                  key={index}
                  className="attribute grid grid-cols-2 gap-4 mb-4"
                >
                  <div className="grid grid-flow-row gap-y-2">
                    <FormField
                      control={control}
                      name={`attributes.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>نام ویژگی</FormLabel>
                          <Input
                            placeholder="نام ویژگی"
                            {...field}
                            value={field.value ?? ""}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-flow-row gap-y-2">
                    {attribute.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="option flex flex-row gap-4"
                      >
                        <FormField
                          key={optionIndex}
                          control={control}
                          name={`attributes.${index}.options.${optionIndex}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>توضیح ویژگی</FormLabel>
                              <Input
                                placeholder="توضیح ویژگی"
                                {...field}
                                value={field.value ?? ""}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemoveAttribute(attribute.id)}
                          className="mt-7"
                        >
                          <RiDeleteBin6Line className="text-red-400" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
export default AddProduct;
