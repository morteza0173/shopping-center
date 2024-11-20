import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GlobalProvider } from "@/app/GloabalContext";

function ReactProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalProvider>
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}
export default ReactProvider;
