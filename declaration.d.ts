declare module 'class-variance-authority' {
	type CVAOptions = {
	  variants?: Record<string, Record<string, string>>;
	  defaultVariants?: Record<string, string>;
	};
  
	export function cva(base: string, options?: CVAOptions): (props?: object) => string;
  
	export type VariantProps<T> = T extends (props?: infer P) => string ? P : never;
  }
  