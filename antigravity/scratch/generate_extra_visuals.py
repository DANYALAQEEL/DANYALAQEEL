import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

def create_deadlock_diagram():
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_facecolor('#1a1a1a')
    
    # Draw intersection
    # 4 Cars (Squares)
    cars = [
        ((0.4, 0.4), 'red', 'P1'),
        ((0.5, 0.4), 'blue', 'P2'),
        ((0.5, 0.5), 'green', 'P3'),
        ((0.4, 0.5), 'yellow', 'P4')
    ]
    
    for pos, color, label in cars:
        rect = patches.Rectangle(pos, 0.1, 0.1, facecolor=color, edgecolor='white')
        ax.add_patch(rect)
        ax.text(pos[0]+0.05, pos[1]+0.05, label, ha='center', va='center', color='black', fontweight='bold')

    # Arrows showing resource dependency cycle
    # P1 needs P2's spot, P2 needs P3...
    cycle = [
        ((0.45, 0.4), (0.5, 0.4), 'Needs'),
        ((0.6, 0.45), (0.6, 0.5), 'Needs'),
        ((0.55, 0.6), (0.5, 0.6), 'Needs'),
        ((0.4, 0.55), (0.4, 0.5), 'Needs')
    ]
    
    ax.set_xlim(0.3, 0.7)
    ax.set_ylim(0.3, 0.7)
    ax.axis('off')
    ax.set_title("Deadlock: Circular Wait", color='white')
    
    plt.savefig('deadlock_traffic.png', dpi=100, bbox_inches='tight')
    plt.close()

def create_title_background():
    # Create a large dark blue image with some cyan lines
    fig, ax = plt.subplots(figsize=(16, 9))
    fig.patch.set_facecolor('#000022')
    ax.set_facecolor('#000022')
    
    # Random lines
    for i in range(20):
        x = np.random.rand(2)
        y = np.random.rand(2)
        ax.plot(x, y, color='#00ffff', alpha=0.3, linewidth=2)
        
    ax.axis('off')
    plt.savefig('title_bg.png', dpi=100, bbox_inches='tight', facecolor='#000022')
    plt.close()

def create_context_switch_visual():
    fig, ax = plt.subplots(figsize=(8, 4))
    ax.set_facecolor('#1a1a1a')
    
    ax.text(0.5, 0.7, "CPU", ha='center', va='center', fontsize=20, color='white', bbox=dict(facecolor='blue', alpha=0.5))
    
    ax.annotate("", xy=(0.2, 0.3), xytext=(0.5, 0.6), arrowprops=dict(arrowstyle="->", color="red", lw=3))
    ax.text(0.2, 0.2, "Process A\n(Saving State)", ha='center', va='center', color='red')
    
    ax.annotate("", xy=(0.5, 0.6), xytext=(0.8, 0.3), arrowprops=dict(arrowstyle="<-", color="green", lw=3))
    ax.text(0.8, 0.2, "Process B\n(Loading State)", ha='center', va='center', color='green')
    
    ax.axis('off')
    ax.set_title("Context Switching Overhead", color='white')
    plt.savefig('context_switch_meme.png', dpi=100, bbox_inches='tight')
    plt.close()

if __name__ == "__main__":
    create_deadlock_diagram()
    create_title_background()
    create_context_switch_visual()
