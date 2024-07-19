import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

export const useMemoizedPathname = () => {
    const pathname = usePathname();
    
    return useMemo(() => pathname, [pathname]);
};
