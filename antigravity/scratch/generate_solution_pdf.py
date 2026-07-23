
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np

def generate_pdf():
    pdf_filename = r"c:\Users\Administrator\.gemini\antigravity\scratch\complex_analysis_solution.pdf"
    
    # Setup standard layout
    plt.rcParams['font.family'] = 'serif'
    plt.rcParams['font.serif'] = ['DejaVu Serif']
    plt.rcParams['text.usetex'] = False  # Use mathtext, stricter requirements for true tex
    
    with PdfPages(pdf_filename) as pdf:
        # Page 1
        fig = plt.figure(figsize=(8.5, 11))
        
        # Header
        plt.text(0.1, 0.95, "Complex Analysis - Assignment Solution", fontsize=14, weight='bold')
        plt.text(0.1, 0.92, "Question 1", fontsize=12, weight='bold')
        plt.axhline(y=0.91, xmin=0.1, xmax=0.9, color='black', linewidth=1)

        # Content
        y_pos = 0.88
        line_height = 0.035 # Increased slightly for readability
        
        def write_line(text, size=11, indent=0.1, style='normal'):
             nonlocal y_pos
             if y_pos < 0.05: return # Simple safety
             weight = 'bold' if style == 'bold' else 'normal'
             plt.text(indent, y_pos, text, fontsize=size, weight=weight)
             y_pos -= line_height

        def write_math(text, size=11, indent=0.15):
             nonlocal y_pos
             plt.text(indent, y_pos, text, fontsize=size)
             y_pos -= (line_height + 0.01)

        # Part A
        write_line("a) Decomposition of the Mapping", style='bold')
        write_line("The function is given by:")
        write_math(r"$h(z) = \frac{3i}{z^2} + 1 + i$")
        write_line("We can decompose this into three elementary functions applied sequentially:")
        write_line(r"1. Reciprocal function: $f(z) = 1/z$")
        write_line(r"2. Squaring function: $g(z) = z^2$")
        write_line(r"3. Linear transformation: $k(z) = 3iz + (1 + i)$")
        y_pos -= 0.01
        write_line("Verification:", style='bold')
        write_math(r"$w_1 = f(z) = \frac{1}{z}$")
        write_math(r"$w_2 = g(w_1) = \left(\frac{1}{z}\right)^2 = \frac{1}{z^2}$")
        write_math(r"$w = k(w_2) = 3i\left(\frac{1}{z^2}\right) + 1 + i$")
        write_line(r"This matches h(z). Thus, $h(z) = k(g(f(z)))$.")
        
        y_pos -= 0.02
        
        # Part B
        write_line(r"b) Image of the circle $|z + \frac{1}{2}i| = \frac{1}{2}$", style='bold')
        write_line(r"This circle passes through the origin ($z=0$), so its reciprocal is a line.")
        y_pos -= 0.01
        write_line(r"Step 1: Reciprocal $w_1 = 1/z$")
        write_line(r"Circle: $|z + i/2| = 1/2 \Rightarrow x^2 + (y+1/2)^2 = 1/4 \Rightarrow x^2 + y^2 + y = 0$.")
        write_line(r"In complex variable: $z\bar{z} + (z - \bar{z})/(2i) = 0$. Dividing by $z\bar{z}$:")
        write_math(r"$1 + \frac{1}{2i}(\frac{1}{\bar{z}} - \frac{1}{z}) = 0 \Rightarrow 1 + \frac{1}{2i}(\bar{w}_1 - w_1) = 0$")
        write_math(r"$1 - \text{Im}(w_1) = 0 \Rightarrow v_1 = 1$")
        write_line(r"Image is the horizontal line $v_1 = 1$.")
        
        y_pos -= 0.01
        write_line(r"Step 2: Squaring $w_2 = w_1^2$")
        write_line(r"Map line $u_1 + i$. $w_2 = (u_1 + i)^2 = u_1^2 - 1 + 2u_1 i$.")
        write_line(r"Let $w_2 = u_2 + i v_2$. Then $u_2 = u_1^2 - 1$ and $v_2 = 2u_1$.")
        write_math(r"Substitute $u_1 = v_2/2 \Rightarrow u_2 = \frac{v_2^2}{4} - 1$")
        write_line("Image is a parabola.")

        y_pos -= 0.01
        write_line(r"Step 3: Linear Map $w = 3iw_2 + (1+i)$")
        write_math(r"$u + iv = 3i(u_2 + iv_2) + 1 + i = (1 - 3v_2) + i(3u_2 + 1)$")
        write_line(r"Relations: $u = 1 - 3v_2$ and $v = 3u_2 + 1$.")
        write_line(r"Invert: $v_2 = (1-u)/3$ and $u_2 = (v-1)/3$.")
        write_line("Substitute into parabola equation:")
        write_math(r"$\frac{v-1}{3} = \frac{1}{4}(\frac{1-u}{3})^2 - 1 \Rightarrow v - 1 = \frac{3}{36}(1-u)^2 - 3$")
        write_line("Final Answer:")
        write_math(r"$v = \frac{1}{12}(u-1)^2 - 2$")
        
        plt.axis('off')
        pdf.savefig(fig)
        plt.close()

        # Page 2
        fig = plt.figure(figsize=(8.5, 11))
        # Header Page 2
        plt.text(0.1, 0.95, "Complex Analysis - Assignment Solution (Cont.)", fontsize=14, weight='bold')
        plt.axhline(y=0.91, xmin=0.1, xmax=0.9, color='black', linewidth=1)
        
        y_pos = 0.88
        
        # Part C
        write_line(r"c) Image of the circle $|z - 1| = 1$", style='bold')
        write_line("Center at 1, radius 1. Passes through origin.")
        y_pos -= 0.01
        write_line(r"Step 1: Reciprocal $w_1 = 1/z$")
        write_line(r"Circle: $(x-1)^2 + y^2 = 1 \Rightarrow x^2 + y^2 - 2x = 0$.")
        write_math(r"$z\bar{z} - (z+\bar{z}) = 0 \Rightarrow 1 - (\frac{1}{\bar{z}} + \frac{1}{z}) = 0$")
        write_math(r"$1 - 2\text{Re}(w_1) = 0 \Rightarrow u_1 = 1/2$")
        write_line(r"Image is vertical line $u_1 = 1/2$.")

        y_pos -= 0.01
        write_line(r"Step 2: Squaring $w_2 = w_1^2$")
        write_line(r"Map line $1/2 + iv_1$. $w_2 = (1/2 + iv_1)^2 = 1/4 - v_1^2 + iv_1$.")
        write_line(r"Let $w_2 = u_2 + i v_2$. Then $u_2 = 1/4 - v_1^2$ and $v_2 = v_1$.")
        write_math(r"$u_2 = \frac{1}{4} - v_2^2$")
        write_line("Image is a parabola opening left.")

        y_pos -= 0.01
        write_line(r"Step 3: Linear Map $w = 3iw_2 + (1+i)$")
        write_line(r"Using same relations: $u_2 = (v-1)/3$ and $v_2 = (1-u)/3$.")
        write_line(r"Substitute into $u_2 = 1/4 - v_2^2$:")
        write_math(r"$\frac{v-1}{3} = \frac{1}{4} - (\frac{1-u}{3})^2$")
        write_math(r"$v - 1 = \frac{3}{4} - 3\frac{(1-u)^2}{9} = \frac{3}{4} - \frac{(u-1)^2}{3}$")
        write_line("Final Answer:")
        write_math(r"$v = -\frac{1}{3}(u-1)^2 + \frac{7}{4}$")

        plt.axis('off')
        pdf.savefig(fig)
        plt.close()

    print(f"PDF generated at: {pdf_filename}")

if __name__ == "__main__":
    generate_pdf()
