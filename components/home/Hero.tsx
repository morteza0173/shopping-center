import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";
import { Suspense } from "react";
import LoadingHeroCarousel from "../global/LoadingHeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl leading-normal sm:text-4xl sm:leading-relaxed">
          با شاپینگ سنتر تجربه ای جدید از خرید آنلاین داشته باش !
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          شاپینگ سنتر ما، یک مرکز خرید مدرن و کامل است که تجربه‌ای جذاب و متنوع
          از خرید را برای شما فراهم می‌کند. از پوشاک و لوازم آرایشی گرفته تا
          الکترونیک و خوراکی، در اینجا می‌توانید محصولات متنوعی را از برندهای
          معتبر بیابید. هدف ما ارائه بهترین محصولات با کیفیت بالا و ایجاد محیطی
          دلپذیر برای خرید آسان و لذت‌بخش شماست.
        </p>
        <Button variant="ringHover" className="w-full mt-10" asChild>
          <Link href="/products">مشاهده تمام محصولات</Link>
        </Button>
      </div>
      <Suspense fallback={<LoadingHeroCarousel />}>
        <HeroCarousel />
      </Suspense>
    </section>
  );
}
export default Hero;
