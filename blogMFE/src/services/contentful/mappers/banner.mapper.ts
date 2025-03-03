import type { Entry } from 'contentful';
import type { Banner } from '@/models/banner.model';

//@ts-ignore
interface ContentfulBanner {
  fields: {
    show: boolean;
    title?: string;
    description?: string;
    leftIcon?: string;
    rightIcon?: string;
  };
}

export function mapBanner(entry: Entry<any>): Banner {
  return {
    show: entry.fields.show as any,
    title: entry.fields.title as any,
    description: entry.fields.description as any,
    leftIcon: entry.fields.leftIcon as any,
    rightIcon: entry.fields.rightIcon as any,
  };
}
