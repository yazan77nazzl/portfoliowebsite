import type { AnchorHTMLAttributes } from 'react';

interface EmailLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  email: string;
}

export function EmailLink({ email, children, onClick, ...props }: EmailLinkProps) {
  return (
    <a
      {...props}
      href={`mailto:${email}`}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (mobile) return;
        event.preventDefault();
        const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(composeUrl, '_blank', 'noopener,noreferrer');
      }}
    >
      {children}
    </a>
  );
}
