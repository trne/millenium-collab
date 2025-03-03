import {useState} from 'react';
import * as Icons from 'lucide-react';
import {X} from 'lucide-react';
import type {BannerProps} from './types';

export function Banner({title, description, leftIcon, rightIcon}: BannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const LeftIcon = leftIcon ? Icons[leftIcon as keyof typeof Icons] : null;
    const RightIcon = rightIcon ? Icons[rightIcon as keyof typeof Icons] : null;

    return (
        <div className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* @ts-ignore */}
                        {LeftIcon && <LeftIcon className="h-5 w-5 shrink-0"/>}
                        <div className="flex flex-col">
                            {title && <span className="font-semibold">{title}</span>}
                            {description && <span className="text-primary-foreground/90 text-sm">{description}</span>}
                        </div>
                    </div>

                    <div>
                        {RightIcon ? (
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                            >
                                {/* @ts-ignore */}
                                <RightIcon className="h-5 w-5"/>
                                <span className="sr-only">Dismiss</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                            >
                                <X className="h-5 w-5"/>
                                <span className="sr-only">Dismiss</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
