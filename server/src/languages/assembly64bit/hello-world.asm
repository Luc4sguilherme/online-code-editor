section .data
msg     db      "Hello, World!", 0xa
len     equ      $-msg

section .text
global _start
_start: mov     rdi, 0x1
        mov     rsi, msg
        mov     rdx, len
        mov     rax, 0x1
        syscall

        xor     rdi, rdi
        mov     rax, 0x3c
        syscall