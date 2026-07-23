import matplotlib.pyplot as plt
import matplotlib.patches as patches
from PIL import Image, ImageDraw, ImageFont

def create_process_state_diagram():
    fig, ax = plt.subplots(figsize=(10, 6))
    ax.set_facecolor('#1a1a1a') # Dark background
    fig.patch.set_facecolor('#1a1a1a')
    
    states = {
        'New': (0.1, 0.5),
        'Ready': (0.3, 0.5),
        'Running': (0.6, 0.5),
        'Terminated': (0.9, 0.5),
        'Waiting': (0.6, 0.2)
    }
    
    # Draw states
    for state, pos in states.items():
        circle = patches.Circle(pos, 0.08, facecolor='#00ffcc', edgecolor='#00ccaa', linewidth=2)
        ax.add_patch(circle)
        ax.text(pos[0], pos[1], state, ha='center', va='center', color='black', fontsize=12, fontweight='bold')

    # Draw transitions
    transitions = [
        ('New', 'Ready', 'Admit'),
        ('Ready', 'Running', 'Scheduler Dispatch'),
        ('Running', 'Terminated', 'Exit'),
        ('Running', 'Ready', 'Interrupt'),
        ('Running', 'Waiting', 'I/O Wait'),
        ('Waiting', 'Ready', 'I/O Complete')
    ]

    for start, end, label in transitions:
        start_pos = states[start]
        end_pos = states[end]
        
        # Adjust arrow path for circular loop-back look
        connectionstyle = "arc3,rad=0.2" if (start == 'Running' and end == 'Ready') else "arc3,rad=0"
        if start == 'Waiting' and end == 'Ready': connectionstyle = "arc3,rad=-0.2"
        
        ax.annotate("", xy=end_pos, xycoords='data', xytext=start_pos, textcoords='data',
                    arrowprops=dict(arrowstyle="->", color="#ff00ff", lw=2, connectionstyle=connectionstyle))
        
        # Add label
        mid_x = (start_pos[0] + end_pos[0]) / 2
        mid_y = (start_pos[1] + end_pos[1]) / 2
        if start == 'Running' and end == 'Ready': mid_y += 0.1
        if start == 'Waiting' and end == 'Ready': mid_y -= 0.1
        
        ax.text(mid_x, mid_y, label, color='white', fontsize=9, ha='center', va='center')

    ax.axis('off')
    ax.set_title("Process State Transition Diagram", color='white', fontsize=16)
    plt.savefig('process_states_flow.png', dpi=300, bbox_inches='tight')
    plt.close()

def create_kernel_architecture():
    fig, ax = plt.subplots(1, 2, figsize=(12, 6))
    fig.patch.set_facecolor('#000033') # Dark blue background

    # Monolithic Kernel
    ax[0].set_facecolor('#000033')
    ax[0].set_title("Monolithic Kernel", color='white', fontsize=14)
    ax[0].set_axis_off()
    
    # User Space
    rect_user = patches.Rectangle((0.1, 0.7), 0.8, 0.2, facecolor='#4da6ff', edgecolor='white')
    ax[0].add_patch(rect_user)
    ax[0].text(0.5, 0.8, "Applications", ha='center', va='center', color='black', fontsize=12)
    
    # Kernel Space (Big Block)
    rect_kernel = patches.Rectangle((0.1, 0.2), 0.8, 0.45, facecolor='#00ff99', edgecolor='white')
    ax[0].add_patch(rect_kernel)
    ax[0].text(0.5, 0.425, "Operating System Kernel\n(FS, IPC, Drivers, Scheduler)", ha='center', va='center', color='black', fontsize=10)
    
    # Hardware
    rect_hw = patches.Rectangle((0.1, 0.05), 0.8, 0.1, facecolor='#cccccc', edgecolor='white')
    ax[0].add_patch(rect_hw)
    ax[0].text(0.5, 0.1, "Hardware", ha='center', va='center', color='black', fontsize=12)


    # Microkernel
    ax[1].set_facecolor('#000033')
    ax[1].set_title("Microkernel", color='white', fontsize=14)
    ax[1].set_axis_off()
    
    # User Space (Servers)
    rect_user_mk = patches.Rectangle((0.1, 0.6), 0.8, 0.3, facecolor='#4da6ff', edgecolor='white')
    ax[1].add_patch(rect_user_mk)
    ax[1].text(0.5, 0.75, "User Servers\n(FS, Drivers, Network)", ha='center', va='center', color='black', fontsize=10)
    
    # Kernel Space (Small Block)
    rect_kernel_mk = patches.Rectangle((0.3, 0.2), 0.4, 0.2, facecolor='#00ff99', edgecolor='white')
    ax[1].add_patch(rect_kernel_mk)
    ax[1].text(0.5, 0.3, "Microkernel\n(Basics: IPC, memory)", ha='center', va='center', color='black', fontsize=9)
    
    # Hardware
    rect_hw_mk = patches.Rectangle((0.1, 0.05), 0.8, 0.1, facecolor='#cccccc', edgecolor='white')
    ax[1].add_patch(rect_hw_mk)
    ax[1].text(0.5, 0.1, "Hardware", ha='center', va='center', color='black', fontsize=12)

    plt.savefig('kernel_architecture.png', dpi=300, bbox_inches='tight')
    plt.close()

def create_retro_os_types():
    # Create black image
    img = Image.new('RGB', (800, 600), color=(0, 0, 0))
    d = ImageDraw.Draw(img)
    
    # Simulate "green screen" text
    try:
        # Try to use a monospace font if available, else default
        font = ImageFont.truetype("cour.ttf", 24)
    except IOError:
        font = ImageFont.load_default()

    text = """
    > SYSTEM BOOT...
    > LOADING OS MODULES...
    > DETECTING ARCHITECTURE...
    
    > OPERATING SYSTEM TYPES FOUND:
    
    [1] BATCH PROCESSING SYSTEM
        - Jobs processed in batches
        - No user interaction
        
    [2] TIME-SHARING SYSTEM
        - Multiple users, multitasking
        - Quantum slices
        
    [3] DISTRIBUTED SYSTEM
        - Loosely coupled
        - Network transparency
        
    [4] REAL-TIME SYSTEM
        - Strict timing constraints
        - Hard vs Soft RT
    
    > SYSTEM READY_
    """
    
    d.text((50, 50), text, fill=(0, 255, 0), font=font)
    
    # Add scanline effect (simple)
    for y in range(0, 600, 4):
        d.line([(0, y), (800, y)], fill=(0, 50, 0), width=1)

    img.save('os_types_retro.png')

if __name__ == "__main__":
    create_process_state_diagram()
    create_kernel_architecture()
    create_retro_os_types()
    print("Diagrams generated.")
